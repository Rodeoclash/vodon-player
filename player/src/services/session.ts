import consola from "consola";
import Video from "services/models/video";
import bus from "services/bus";

const handlePlay = (originVideo: Video) => {
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
