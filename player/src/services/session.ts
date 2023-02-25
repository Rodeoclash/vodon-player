import consola from "consola";
import Video from "services/models/video";
import bus from "services/bus";

const handlePlay = (originVideo: Video) => {
  consola.log("Playing preview videos");

  originVideo.session.videos.forEach((video) => {
    if (
      video.id === originVideo.id ||
      video.calculatedOffset === null ||
      video.reviewVideoEl === null ||
      originVideo.calculatedOffset === null
    ) {
      return;
    }

    video.reviewVideoEl.play();
  });
};

const handlePause = (originVideo: Video) => {
  consola.log("Pausing preview videos");

  originVideo.session.videos.forEach((video) => {
    if (
      video.id === originVideo.id ||
      video.calculatedOffset === null ||
      video.reviewVideoEl === null ||
      originVideo.calculatedOffset === null
    ) {
      return;
    }

    const el = video.reviewVideoEl;

    el.pause();

    const offsetFromIncomingVideo =
      video.calculatedOffset - originVideo.calculatedOffset;

    el.currentTime = originVideo.currentTime + offsetFromIncomingVideo;
  });
};

const handleGotoTime = (originVideo: Video, newTime: number) => {
  consola.log(`Seeking preview videos to: ${newTime}`);

  originVideo.session.videos.forEach((video) => {
    if (
      video.id === originVideo.id ||
      video.calculatedOffset === null ||
      video.reviewVideoEl === null ||
      originVideo.calculatedOffset === null
    ) {
      return;
    }

    const el = video.reviewVideoEl;

    const offsetFromIncomingVideo =
      video.calculatedOffset - originVideo.calculatedOffset;

    el.currentTime = newTime + offsetFromIncomingVideo;
  });
};

export const bindBus = () => {
  bus.on(`video.play`, handlePlay);
  bus.on(`video.pause`, handlePause);
  bus.on(`video.gotoTime`, handleGotoTime);
};

export const unbindBus = () => {
  bus.off(`video.play`, handlePlay);
  bus.off(`video.pause`, handlePause);
  bus.off(`video.pause`, handleGotoTime);
};
