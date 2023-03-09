import VideoFrame from "services/models/video_frame";
import { remove as removeVideoFrame } from "services/video_frames/assets";
import fileHandles from "services/file_handles";

export const remove = async (videoFrame: VideoFrame) => {
  await removeVideoFrame(videoFrame);

  await fileHandles.table("videoFrameFileHandles").delete(videoFrame.id);

  return videoFrame;
};
