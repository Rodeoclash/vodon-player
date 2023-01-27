import Video from "services/models/video";
import bus from "services/bus";

export const buildElement = async (
  video: Video,
  fileHandle: FileSystemFileHandle
): Promise<HTMLVideoElement> => {
  const el = document.createElement("video");
  const file = await fileHandle.getFile();
  const url = URL.createObjectURL(file);

  el.volume = video.volume;
  el.src = url;

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

  bus.on("video.pause", (originVideo: Video) => {
    if (video.id === originVideo.id) {
      return;
    }

    el.pause();
  });

  bus.on("video.play", (originVideo: Video) => {
    if (video.id === originVideo.id) {
      return;
    }

    el.play();
  });

  bus.on("video.gotoTime", (originVideo: Video, newTime: number) => {
    if (
      video.id === originVideo.id ||
      video.calculatedOffset === null ||
      originVideo.calculatedOffset === null
    ) {
      return;
    }

    const offsetFromIncomingVideo =
      video.calculatedOffset - originVideo.calculatedOffset;

    el.currentTime = newTime + offsetFromIncomingVideo;
  });

  return el;
};
