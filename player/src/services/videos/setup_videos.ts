import Video from "services/models/video";
import { screenshot } from "services/videos";
import { storeSetupVideoSyncFrame } from "./assets";
import fileHandles from "services/file_handles";

const captureSetupVideoSyncFrame = async (video: Video) => {
  const frame = await screenshot(video);
  const fileHandle = await storeSetupVideoSyncFrame(video, frame);

  return await fileHandles.table("setupVideoSyncImageFileHandles").put({
    id: video.id,
    fileHandle,
  });
};

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
    captureSetupVideoSyncFrame(video);
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
