import VideoFrame from "services/models/video_frame";
import { store as storeVideoFrame } from "services/video_frames/assets";

export const create = async (frame: Blob) => {
  const frameURL = URL.createObjectURL(frame);

  // Create the frame that it's going to go on
  const videoFrame = new VideoFrame({
    url: frameURL,
  });

  // Store it
  await storeVideoFrame(videoFrame, frame);

  return videoFrame;
};
