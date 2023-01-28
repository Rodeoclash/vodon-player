import { frozen } from "mobx-keystone";

import { MissingLocalFileHandle } from "services/errors";
import { copyToStorage, removeFromStorage } from "services/video_storage";
import database from "services/database";
import { readMediaData } from "./videos/mediainfo";
import { InvalidVideo } from "services/errors";

import Session from "services/models/session";
import Video from "services/models/video";

/**
 * Creates a video under a session, also responsible for storing the local file handle to the video.
 * @param session
 * @param localFileHandle
 * @returns
 */
export const createVideoInSession = async (
  session: Session,
  fileHandle: FileSystemFileHandle
): Promise<Video> => {
  const file = await fileHandle.getFile();

  // Parse video information and store it
  const result = await readMediaData(file);
  const videoTrack = result.media.track.find(
    (track) => track["@type"] === "Video"
  ) as any;

  if (videoTrack === undefined) {
    throw new InvalidVideo(
      "Could not find a video track in the supplied video"
    );
  }

  const video = new Video({
    name: file.name,
    type: file.type,
    height: parseInt(videoTrack.Height),
    width: parseInt(videoTrack.Width),
    frameRate: parseFloat(videoTrack.FrameRate),
    duration: parseFloat(videoTrack.Duration),
    videoData: frozen(videoTrack),
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
