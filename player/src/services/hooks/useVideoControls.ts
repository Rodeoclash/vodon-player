import consola from "consola";

const useVideoControls = (videoEl: HTMLVideoElement | null) => {
  const gotoTime = (newTime: number) => {
    if (videoEl === null) {
      return;
    }

    consola.info(`Setting video time to: ${newTime}`);

    videoEl.currentTime = newTime;
  };

  const pause = () => {
    if (videoEl === null) {
      return;
    }

    consola.info("Pausing video");

    videoEl.pause();
  };

  const play = () => {
    if (videoEl === null) {
      return;
    }

    consola.info("Playing video");

    videoEl.play();
  };

  const setVolume = (newVolume: number) => {
    if (videoEl === null) {
      return;
    }

    consola.info(`Setting video volume to: ${newVolume}`);

    videoEl.volume = newVolume;
  };

  return [gotoTime, pause, play, setVolume] as const;
};

export default useVideoControls;
