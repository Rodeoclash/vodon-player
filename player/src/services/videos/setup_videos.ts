import { InvalidVideo } from "services/errors";
import { screenshot } from "services/videos";
import {
  remove as removeVideoFrame,
  store as storeVideoFrame,
} from "services/video_frames/assets";
import debounce from "lodash.debounce";

import Video from "services/models/video";
import VideoFrame from "services/models/video_frame";

const captureSetupVideoSyncFrame = async (video: Video) => {
  if (video.setupVideoEl === null) {
    throw new InvalidVideo(
      "Setup video element was not present so could not take screenshot"
    );
  }

  // Remove any existing sync frames we might already have
  if (video.videoSyncFrame !== null) {
    removeVideoFrame(video.videoSyncFrame);
  }

  // Generate a new sync frame
  const frame = await screenshot(video.setupVideoEl, video.width, video.height);
  const videoFrame = new VideoFrame({});

  // Store it
  await storeVideoFrame(videoFrame, frame);

  // Finally, tell the video that it exists by linking it.
  video.setVideoSyncFrame(videoFrame);
};

// We can trigger a lot of "seeked" operations when dragging the slider. This
// debounced function ensures we don't overwhelm storing the sync frames.
const debouncedCaptureSetupVideoSyncFrame = debounce(
  captureSetupVideoSyncFrame,
  200
);

export const buildElement = async (
  video: Video,
  url: string
): Promise<HTMLVideoElement> => {
  const el = document.createElement("video");

  el.volume = video.volume;
  el.src = url;

  // The + 0.01 is required to prevent the video restoring on the *previous*
  // frame when loading from storage!
  el.currentTime = video.offset + 0.01;

  el.addEventListener("play", async () => {
    video.setSetupVideoPlaying(true);
  });

  el.addEventListener("pause", async () => {
    video.setSetupVideoPlaying(false);
    captureSetupVideoSyncFrame(video);
  });

  el.addEventListener("seeking", async () => {
    video.setSetupVideoSeeking(true);
  });

  el.addEventListener("seeked", async () => {
    video.setSetupVideoSeeking(false);
    debouncedCaptureSetupVideoSyncFrame(video);
  });

  el.addEventListener("volumechange", async (event: Event) => {
    const target = event.target as HTMLVideoElement;
    video.setVolume(target.volume);
  });

  // Fired every time the frame in the video changes, used to automatically
  // sync the current time of the video into the store. This is used for things
  // like the video time counter and progress bar.
  const handleVideoFrame = (
    now: number,
    metadata: VideoFrameCallbackMetadata
  ) => {
    video.setOffset(metadata.mediaTime);
    el.requestVideoFrameCallback(handleVideoFrame);
  };

  el.requestVideoFrameCallback(handleVideoFrame);

  return el;
};
