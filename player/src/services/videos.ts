import Video from "services/models/video";
import { getFileHandle } from "services/local_files";
import { LocalFileError } from "services/errors";

/**
 * Do we have a usuable local file handle for this video?
 * @param video The video to check and update peremissions on
 * @returns Video
 */
export const updateLocalFileHandleExists = async (
  video: Video
): Promise<Video> => {
  const localFileHandle = await getFileHandle(video);

  if (localFileHandle !== undefined) {
    video.setLocalFileHandleExists(true);
  } else {
    video.setLocalFileHandleExists(false);
  }

  return video;
};

/**
 * What state is the permissions for the local file handle in?
 * @param video The video to check and update peremissions on
 * @returns Video
 */
export const updateLocalFileHandlePermission = async (video: Video) => {
  if (video.localFileHandleExists === null) {
    throw new LocalFileError(
      "Attempted to determine access of local file system handle but it was not ready"
    );
  }

  if (video.localFileHandleExists === false) {
    return video.setLocalFileHandlePermission(null);
  }

  const localFileHandle = await getFileHandle(video);
  const permission = await localFileHandle.queryPermission({ mode: "read" });

  return video.setLocalFileHandlePermission(permission);
};

export const requestLocalFileHandlePermission = async (video: Video) => {
  if (video.localFileHandleExists === null) {
    throw new LocalFileError(
      "Attempted to request permission on file handle but it was not ready"
    );
  }

  if (video.localFileHandleExists === false) {
    throw new LocalFileError(
      "Attempted to request permission on file handle but it did not exist"
    );
  }

  const localFileHandle = await getFileHandle(video);
  const permission = await localFileHandle.requestPermission({ mode: "read" });

  return video.setLocalFileHandlePermission(permission);
};

export const copyToOPFS = async (video: Video) => {
  console.log("=== do copy");
};
