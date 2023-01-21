import Video from "services/models/video";

export const buildElement = async (
  video: Video,
  fileHandle: FileSystemFileHandle
): Promise<HTMLVideoElement> => {
  const el = document.createElement("video");
  const file = await fileHandle.getFile();
  const url = URL.createObjectURL(file);

  el.volume = video.volume;

  // Restore the videos time position from what was saved if it exists
  if (video.currentTime !== null) {
    el.currentTime = video.currentTime;
  }

  el.addEventListener("play", async () => {
    video.setReviewVideoPlaying(true);
  });

  el.addEventListener("pause", async () => {
    video.setReviewVideoPlaying(false);
  });

  el.addEventListener("seeking", async () => {
    video.setReviewVideoSeeking(true);
  });

  el.addEventListener("seeked", async () => {
    video.setReviewVideoSeeking(false);
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
    video.setCurrentTime(metadata.mediaTime);
    el.requestVideoFrameCallback(handleVideoFrame);
  };

  el.requestVideoFrameCallback(handleVideoFrame);

  el.src = url;

  return el;
};
