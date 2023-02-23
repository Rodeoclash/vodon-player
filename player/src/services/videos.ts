import { frozen } from "mobx-keystone";

import { MissingLocalFileHandle } from "services/errors";
import { copyToStorage, removeFromStorage } from "services/video_storage";
import database from "services/database";
import {
  readMediaDataFromFile,
  readMediaDataFromURL,
} from "./videos/mediainfo";
import { InvalidVideo } from "services/errors";

import Session from "services/models/session";
import Video from "services/models/video";
import { ResultObject } from "mediainfo.js/dist/types";

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
  await storeFile(video);

  return video;
};

/**
 * Triggers the removal of a video from the system. We call this service
 * instead of a delete method on the video as we have a bunch of cleanup that
 * needs to be done as part of the removal.
 * @param video The video to remove
 */
export const removeVideo = async (video: Video) => {
  // Remove from OPFS
  removeFromStorage(video);

  // Remove local file handle (if it exists)
  await database.table("localVideoFileHandles").delete(video.id);

  // Remove storage file handle (if it exists)
  await database.table("storageVideoFileHandles").delete(video.id);

  // Remove from session
  video.session.removeVideo(video);
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

export const storeFile = async (video: Video): Promise<Video> => {
  const fileHandleRecord = await database.table("localVideoFileHandles").get({
    id: video.id,
  });

  if (fileHandleRecord === undefined) {
    throw new MissingLocalFileHandle(
      "Attempted to use local file handle but it was not present"
    );
  }

  const fileHandle = fileHandleRecord.fileHandle;

  if ((await fileHandle.queryPermission({ mode: "read" })) !== "granted") {
    throw new MissingLocalFileHandle(
      "Attempting to copy file but it does not have permission granted"
    );
  }

  copyToStorage(fileHandleRecord.fileHandle, video);

  return video;
};
