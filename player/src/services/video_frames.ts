import VideoFrame from "services/models/video_frame";
import { store as storeAsset, remove as removeAsset } from "services/assets";

export const create = async (frame: Blob) => {
  const frameURL = URL.createObjectURL(frame);

  // Create the frame that it's going to go on
  const videoFrame = new VideoFrame({
    url: frameURL,
  });

  videoFrame.fileSource = frame;

  // Store it
  await storeAsset(videoFrame);

  return videoFrame;
};

export const remove = async (videoFrame: VideoFrame) => {
  await removeAsset(videoFrame);
};
