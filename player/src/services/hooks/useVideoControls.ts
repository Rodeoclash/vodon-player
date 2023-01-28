import * as React from "react";

const useVideoControls = (videoEl: HTMLVideoElement | null) => {
  const gotoTime = (newTime: number) => {
    if (videoEl === null) {
      return;
    }

    videoEl.currentTime = newTime;
  };

  const pause = () => {
    if (videoEl === null) {
      return;
    }

    videoEl.pause();
  };

  const play = () => {
    if (videoEl === null) {
      return;
    }

    videoEl.play();
  };

  const setVolume = (newVolume: number) => {
    if (videoEl === null) {
      return;
    }

    videoEl.volume = newVolume;
  };

  return [gotoTime, pause, play, setVolume] as const;
};

export default useVideoControls;
