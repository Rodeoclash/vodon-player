import { MissingLocalFileHandle } from "services/errors";
import { CopyFileToStorage } from "services/file_storage";
import database from "services/database";

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
  const video = new Video({
    name: fileHandle.name,
  });

  // Join the video to the session it was being created under
  session.addVideo(video);

  // Store a reference to this videos local file handle in the persistence database
  await database.table("videoFileHandles").put({
    id: video.id,
    fileHandle,
  });

  // Trigger the synchronisation of the file handle with the mobx store
  updateLocalFileHandle(video);

  // TODO - Copy the video to our file storage

  return video;
};

/**
 * Called when loading the video file or after adding, configures the
 * availability of the local file system handle.
 * @param video The video to check and update permissions on.
 * @returns Video
 */
export const updateLocalFileHandle = async (video: Video): Promise<Video> => {
  const result = await database.table("videoFileHandles").get({
    id: video.id,
  });

  if (result === undefined) {
    video.setLocalFileHandleExists(false);
    return video;
  }

  video.localFileHandle = result.fileHandle;

  if (video.localFileHandle === null) {
    video.setLocalFileHandleExists(false);
    return video;
  }

  video.setLocalFileHandleExists(true);

  const permission = await video.localFileHandle.queryPermission({
    mode: "read",
  });

  video.setLocalFileHandlePermission(permission);

  return video;
};

export const requestLocalFileHandlePermission = async (
  video: Video
): Promise<Video> => {
  if (video.localFileHandle === null) {
    throw new MissingLocalFileHandle(
      "Attempted to request permissions on videos file handle but it was not present"
    );
  }

  const permission = await video.localFileHandle.requestPermission({
    mode: "read",
  });

  video.setLocalFileHandlePermission(permission);

  return video;
};

export const storeFile = async (video: Video) => {
  if (video.localFileHandle === null) {
    throw new MissingLocalFileHandle(
      "Attempted to use local file handle but it was not present"
    );
  }

  if (video.localFileHandlePermission !== "granted") {
    throw new MissingLocalFileHandle(
      "Attempting to copy file but it does not have permission granted"
    );
  }

  const session = video.getSession();

  CopyFileToStorage(video.localFileHandle, session.id, video.id);
};
