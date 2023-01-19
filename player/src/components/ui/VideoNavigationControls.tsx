import * as React from "react";
import { secondsToHms } from "services/time";
import { useHotkeys } from "react-hotkeys-hook";

import FrameAdjust from "./VideoNavigationControls/FrameAdjust";
import Progress from "./VideoNavigationControls/Progress";
import Volume from "./VideoNavigationControls/Volume";

import { Direction } from "./VideoNavigationControls/FrameAdjust";

type Props = {
  currentTime: number;
  duration: number;
  frameLength: number;
  keyboardShortcutsEnabled: boolean;
  onGotoTime: (newTime: number) => void;
  onPause: () => void;
  onPlay: () => void;
  playing: boolean;
  videoEl: HTMLVideoElement;
  volume: number;
};

const VideoNavigationControls = ({
  currentTime,
  duration,
  frameLength,
  keyboardShortcutsEnabled,
  onGotoTime,
  onPause,
  onPlay,
  playing,
  videoEl,
  volume,
}: Props) => {
  const handlePlay = React.useCallback(() => {
    onPlay();
  }, []);

  const handlePause = React.useCallback(() => {
    onPause();
  }, []);

  useHotkeys(
    "space",
    () => {
      if (keyboardShortcutsEnabled === false) {
        return;
      }
      playing === true ? handlePause() : handlePlay();
    },
    [keyboardShortcutsEnabled, playing]
  );

  return (
    <div className="bg-black flex items-stretch h-12 gap-4">
      {playing === false && (
        <div className="videoControl">
          <button onClick={() => handlePlay()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
              />
            </svg>
          </button>
        </div>
      )}
      {playing === true && (
        <div className="videoControl">
          <button onClick={() => handlePause()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 5.25v13.5m-7.5-13.5v13.5"
              />
            </svg>
          </button>
        </div>
      )}
      <div className="videoControl">
        <span>
          {secondsToHms(Math.round(currentTime))} /{" "}
          {secondsToHms(Math.round(duration))}
        </span>
      </div>
      <div className="videoControl">
        <FrameAdjust
          direction={Direction.Back}
          frameLength={frameLength}
          keyboardShortcutsEnabled={keyboardShortcutsEnabled}
          onGotoTime={onGotoTime}
          videoEl={videoEl}
        />
      </div>
      <div className="flex-grow videoControl p-0">
        <Progress
          currentTime={currentTime}
          onGotoTime={onGotoTime}
          duration={duration}
        />
      </div>
      <div className="videoControl">
        <FrameAdjust
          direction={Direction.Forward}
          frameLength={frameLength}
          keyboardShortcutsEnabled={keyboardShortcutsEnabled}
          onGotoTime={onGotoTime}
          videoEl={videoEl}
        />
      </div>
      <div className="videoControl w-32">
        <Volume videoEl={videoEl} volume={volume} />
      </div>
    </div>
  );
};

export default VideoNavigationControls;
