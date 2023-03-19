import { MissingLocalFileHandle } from "services/errors";
import { addFromFileHandle, remove as opfsRemove } from "services/opfs";
import Video from "services/models/video";
import fileHandles from "services/file_handles";

export const store = async (
  video: Video,
  fileHandle: FileSystemFileHandle
): Promise<Video> => {
  return new Promise(async (resolve, reject) => {
    // Determine if we can read the file handle and if we can't, throw an
    // error. We should have prompted for access before this point.
    const readPermission = await fileHandle.queryPermission({
      mode: "read",
    });

    if (readPermission !== "granted") {
      throw new MissingLocalFileHandle(
        "Attempting to copy file but it does not have permission granted"
      );
    }

    return addFromFileHandle(video.filePath, fileHandle, {
      onStart: (event) => {
        video.setCopyToStorageProgress(0);
      },
      onProgress: (event) => {
        video.setCopyToStorageProgress(event.progress);
      },
      onComplete: async (event) => {
        await fileHandles.table("videoFileHandles").put({
          id: video.id,
          fileHandle: fileHandle,
        });

        video.setCopyToStorageProgress(100);

        resolve(video);
      },
    });
  });
};

export const remove = async (video: Video): Promise<Video> => {
  return new Promise((resolve, reject) => {
    opfsRemove(video.filePath, {
      onComplete: async () => {
        await fileHandles.table("videoFileHandles").delete(video.id);
        resolve(video);
      },
    });
  });
};
