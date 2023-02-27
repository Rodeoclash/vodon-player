import consola from "consola";
import Video from "services/models/video";
import bus from "services/bus";

const handlePlay = (originVideo: Video) => {
  originVideo.session.videos.forEach((video) => {
    if (
      video.id === originVideo.id ||
      video.normalisedOffset === null ||
      video.reviewVideoEl === null ||
      originVideo.normalisedOffset === null
    ) {
      return;
    }

    video.reviewVideoEl.play();
  });
};

const handlePause = (originVideo: Video) => {
  originVideo.session.videos.forEach((video) => {
    if (
      video.id === originVideo.id ||
      video.normalisedOffset === null ||
      video.reviewVideoEl === null ||
      originVideo.normalisedOffset === null
    ) {
      return;
    }

    const el = video.reviewVideoEl;

    el.pause();

    const offsetFromIncomingVideo =
      video.normalisedOffset - originVideo.normalisedOffset;

    el.currentTime = originVideo.currentTime + offsetFromIncomingVideo;
  });
};

const handleGotoTime = (originVideo: Video, newTime: number) => {
  originVideo.session.videos.forEach((video) => {
    if (
      video.id === originVideo.id ||
      video.normalisedOffset === null ||
      video.reviewVideoEl === null ||
      originVideo.normalisedOffset === null
    ) {
      return;
    }

    const el = video.reviewVideoEl;

    const offsetFromIncomingVideo =
      video.normalisedOffset - originVideo.normalisedOffset;

    el.currentTime = newTime + offsetFromIncomingVideo;
  });
};

export const bindBus = () => {
  consola.log(`Binding bus listeners`);
  bus.on(`video.play`, handlePlay);
  bus.on(`video.pause`, handlePause);
  bus.on(`video.gotoTime`, handleGotoTime);
};

export const unbindBus = () => {
  consola.log(`Unbinding bus listeners`);
  bus.off(`video.play`, handlePlay);
  bus.off(`video.pause`, handlePause);
  bus.off(`video.pause`, handleGotoTime);
};
