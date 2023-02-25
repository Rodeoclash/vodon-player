import { frozen } from "mobx-keystone";

import { MissingLocalFileHandle } from "services/errors";
import database from "services/database";
import {
  store as storeAssets,
  remove as removeAssets,
} from "services/videos/assets";

import {
  readMediaDataFromFile,
  readMediaDataFromURL,
} from "./videos/mediainfo";

import { InvalidVideo } from "services/errors";

import Session from "services/models/session";
import Video from "services/models/video";
import { ResultObject } from "mediainfo.js/dist/types";

export const createRemoteVideoInSession = async (
  session: Session,
  url: string
) => {
  const { result, contentType } = await readMediaDataFromURL(url);
  const videoTrack = extractVideoTrack(result);

  const video = new Video({
    name: "url", // GET PARTIAL NAME FROM URL
    type: contentType,
    videoData: frozen(videoTrack),
    url,
  });

  session.addVideo(video);

  return video;
};

/**
 * Creates a video under a session, also responsible for storing the local
 * file handle to the video. This version creates from a local file stored on
 * the users computer.
 *
 * @param session
 * @param localFileHandle
 * @returns
 */
export const createLocalVideoInSession = async (
  session: Session,
  fileHandle: FileSystemFileHandle
): Promise<Video> => {
  const file = await fileHandle.getFile();

  const videoTrack = extractVideoTrack(await readMediaDataFromFile(file));

  const video = new Video({
    name: file.name,
    type: file.type,
    videoData: frozen(videoTrack),
    url: null,
  });

  // Join the video to the session it was being created under
  session.addVideo(video);

  // Store a reference to this videos local file handle in the persistence database
  await database.table("localVideoFileHandles").put({
    id: video.id,
    fileHandle,
  });

  // Trigger storing the file
  await storeAssets(video);

  return video;
};

export const requestLocalFileHandlePermission = async (
  video: Video
): Promise<Video> => {
  const fileHandleRecord = await database.table("localVideoFileHandles").get({
    id: video.id,
  });

  if (fileHandleRecord === undefined) {
    throw new MissingLocalFileHandle(
      "Attempted to request permissions on videos file handle but it was not present"
    );
  }

  const fileHandle = fileHandleRecord.fileHandle;

  await fileHandle.requestPermission({
    mode: "read",
  });

  await database.table("localVideoFileHandles").put({
    id: video.id,
    fileHandle,
  });

  return video;
};

/**
 * Helper function for removing videos. Will first remove all the assets that
 * are related to the video then will remove the video itself.
 *
 * @param video The video to remove
 */
export const remove = async (video: Video) => {
  await removeAssets(video);
  video.delete();
};

const extractVideoTrack = (result: ResultObject) => {
  const videoTrack = result.media.track.find(
    (track) => track["@type"] === "Video"
  ) as any;

  if (videoTrack === undefined) {
    throw new InvalidVideo(
      "Could not find a video track in the supplied video"
    );
  }

  return videoTrack;
};
