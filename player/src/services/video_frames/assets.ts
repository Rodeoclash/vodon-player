import { addFromBlob, remove as opfsRemove } from "services/opfs";
import VideoFrame from "services/models/video_frame";
import fileHandles from "services/file_handles";

export const store = async (
  videoFrame: VideoFrame,
  blob: Blob
): Promise<VideoFrame> => {
  return new Promise(async (resolve, reject) => {
    return addFromBlob(videoFrame.filePath, blob, {
      onComplete: async (event) => {
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
        await fileHandles.table("videoFrameFileHandles").delete(videoFrame.id);
        resolve(videoFrame);
      },
    });
  });
};
