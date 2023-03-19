import consola from "consola";
import Session from "services/models/session";
import Video from "services/models/video";
import bus from "services/bus";
import { remove as removeVideo } from "services/videos";

export const remove = async (session: Session) => {
  const results = session.videos.map((video) => {
    return removeVideo(video);
  });
  await Promise.all(results);
  session.delete();
};

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
  consola.info(`Binding bus listeners`);
  bus.on(`video.play`, handlePlay);
  bus.on(`video.pause`, handlePause);
  bus.on(`video.gotoTime`, handleGotoTime);
};

export const unbindBus = () => {
  consola.info(`Unbinding bus listeners`);
  bus.off(`video.play`, handlePlay);
  bus.off(`video.pause`, handlePause);
  bus.off(`video.pause`, handleGotoTime);
};
