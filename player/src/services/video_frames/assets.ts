import { addFromBlob, remove as opfsRemove } from "services/opfs";
import fileHandles from "services/file_handles";
import VideoFrame from "services/models/video_frame";

export const store = async (
  videoFrame: VideoFrame,
  frame: Blob
): Promise<VideoFrame> => {
  return new Promise((resolve, reject) => {
    addFromBlob(videoFrame.filePath, frame, {
      onComplete: async (event) => {
        // Finally, save the file handle into the file system database so it
        // becomes available when using the bookmark page.
        await fileHandles.table("videoFrameFileHandles").put({
          id: videoFrame.id,
          fileHandle: event.fileHandle,
        });

        resolve(videoFrame);
      },
    });
  });
};

export const remove = async (videoFrame: VideoFrame): Promise<VideoFrame> => {
  return new Promise((resolve, reject) => {
    opfsRemove(videoFrame.filePath, {
      onComplete: async () => {
        // Remove storage file handle (if it exists)
        await fileHandles.table("videoFrameFileHandles").delete(videoFrame.id);

        resolve(videoFrame);
      },
    });
  });
};
