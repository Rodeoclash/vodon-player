import Video from "services/models/video";

export const buildElement = async (
  video: Video,
  fileHandle: FileSystemFileHandle
): Promise<HTMLVideoElement> => {
  const el = document.createElement("video");
  const file = await fileHandle.getFile();
  const url = URL.createObjectURL(file);

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
  });

  el.addEventListener("seeking", async () => {
    video.setSetupVideoSeeking(true);
  });

  el.addEventListener("seeked", async () => {
    video.setSetupVideoSeeking(false);
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
