import consola from "consola";
import { store, remove } from "services/assets";
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
  return new Promise((resolve, reject) => {
    store(video, {
      onStart: (event) => {
        video.setCopyToStorageProgress(event.progress);
      },
      onProgress: (event) => {
        video.setCopyToStorageProgress(event.progress);
      },
      onComplete: async (event) => {
        video.setCopyToStorageProgress(event.progress);
        resolve(video);
      },
    });
  });
};

/**
 * Triggers the removal of a video assets from the system. We should also
 * trigger a cleanup of backend assets here when we're storing them.
 *
 * @param video The video to remove
 */
export const removeVideoFile = async (video: Video) => {
  await remove(video);
};
