import { frozen } from "mobx-keystone";

import { MissingLocalFileHandle } from "services/errors";
import fileHandles from "services/file_handles";
import { storeVideoFile, removeVideoFlie } from "services/videos/assets";

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
    setupVideoHovered: true,
    type: contentType,
    url,
    videoData: frozen(videoTrack),
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
    setupVideoHovered: true,
    type: file.type,
    url: null,
    videoData: frozen(videoTrack),
  });

  // Join the video to the session it was being created under
  session.addVideo(video);

  // Store a reference to this videos local file handle in the persistence database
  await fileHandles.table("localVideoFileHandles").put({
    id: video.id,
    fileHandle,
  });

  // Trigger storing the file
  await storeVideoFile(video);

  return video;
};

export const requestLocalFileHandlePermission = async (
  video: Video
): Promise<Video> => {
  const fileHandleRecord = await fileHandles
    .table("localVideoFileHandles")
    .get({
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

  await fileHandles.table("localVideoFileHandles").put({
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
  await removeVideoFlie(video);
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

export const screenshot = (video: Video): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    if (video.setupVideoEl === null) {
      throw new InvalidVideo("Cannot screenshot video unless it is ready");
    }

    const canvas = document.createElement("canvas");
    canvas.width = video.width;
    canvas.height = video.height;
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      throw new Error("Canvas context was null for some reason");
    }

    ctx.drawImage(video.setupVideoEl, 0, 0, canvas.width, canvas.height);

    canvas.toBlob((blob) => {
      if (!blob) {
        throw new Error("Could not convert to blob for some reason");
      }

      resolve(blob);
    });
  });
};
