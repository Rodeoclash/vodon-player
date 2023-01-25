import * as React from "react";

const useVideoControls = (videoEl: HTMLVideoElement | null) => {
  const gotoTime = React.useCallback(
    (newTime: number) => {
      if (videoEl === null) {
        return;
      }

      videoEl.currentTime = newTime;
    },
    [videoEl]
  );

  const pause = React.useCallback(() => {
    if (videoEl === null) {
      return;
    }

    videoEl.pause();
  }, [videoEl]);

  const play = React.useCallback(() => {
    if (videoEl === null) {
      return;
    }

    videoEl.play();
  }, [videoEl]);

  return [gotoTime, pause, play] as const;
};

export default useVideoControls;
