import consola from "consola";
import { add as opfsAdd, remove as opfsRemove } from "services/opfs";
import fileHandles from "services/file_handles";
import { MissingLocalFileHandle } from "services/errors";

import Video from "services/models/video";

/**
 * Handles storing the video (currently only OPFS, this should be expanded to
 * storing videos on the back as well)
 *
 * @param video The video file to store
 * @returns video
 */
export const storeVideoFile = async (video: Video): Promise<Video> => {
  const fileHandleRecord = await fileHandles
    .table("localVideoFileHandles")
    .get({
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

  // Add to the OPFS storage
  return new Promise((resolve, reject) => {
    opfsAdd(video.storageDirectory, video.storageFilename, fileHandle, {
      onStart: (event) => {
        consola.info("Starting copy of video file handle into OPFS");
        video.setCopyToStorageProgress(event.progress);
      },
      onProgress: (event) => {
        consola.info(`Video copy into OPFS progress: ${event.progress}`);
        video.setCopyToStorageProgress(event.progress);
      },
      onComplete: async (event) => {
        consola.info("Completed copy of video file handle into OPFS");
        video.setCopyToStorageProgress(event.progress);

        await fileHandles.table("storageVideoFileHandles").put({
          id: video.id,
          fileHandle: event.fileHandle,
        });

        resolve(video);
      },
    });
  });

  return video;
};

/**
 * Triggers the removal of a video assets from the system. We should also
 * trigger a cleanup of backend assets here when we're storing them.
 *
 * @param video The video to remove
 */
export const removeVideoFlie = async (video: Video): Promise<Video> => {
  // Remove from OPFS
  return new Promise((resolve, reject) => {
    opfsRemove(video.storageDirectory, video.storageFilename, {
      onComplete: async () => {
        consola.info(`Completed removing video file from OPFS `);

        // Remove local file handle (if it exists)
        await fileHandles.table("localVideoFileHandles").delete(video.id);

        // Remove storage file handle (if it exists)
        await fileHandles.table("storageVideoFileHandles").delete(video.id);

        resolve(video);
      },
    });
  });
};
