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
  playing: boolean;
  seeking: boolean;
  videoEl: HTMLVideoElement;
  volume: number;
  onPause: () => void;
  onPlay: () => void;
  onGotoTime: (newTime: number) => void;
};

const VideoNavigationControls = ({
  currentTime,
  duration,
  frameLength,
  keyboardShortcutsEnabled,
  playing,
  seeking,
  videoEl,
  volume,
  onPause,
  onPlay,
  onGotoTime,
}: Props) => {
  const handleTogglePlay = React.useCallback(() => {
    if (playing === true) {
      onPause();
    } else {
      onPlay();
    }
  }, [playing]);

  useHotkeys(
    "space",
    () => {
      if (keyboardShortcutsEnabled === false) {
        return;
      }
      handleTogglePlay();
    },
    [keyboardShortcutsEnabled, playing]
  );

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="basis-1/3 text-bright">
          {secondsToHms(Math.round(currentTime))} /{" "}
          {secondsToHms(Math.round(duration))}
        </div>
        <div className="basis-1/3 flex items-center justify-center gap-4 flex-grow">
          <div className="flex items-center justify-center">
            <FrameAdjust
              direction={Direction.Back}
              frameLength={frameLength}
              keyboardShortcutsEnabled={keyboardShortcutsEnabled}
              seeking={seeking}
              videoEl={videoEl}
              onGotoTime={onGotoTime}
            />
          </div>
          <div
            className="bg-zinc-700 rounded-full w-16 h-16 flex items-center justify-center cursor-pointer"
            onClick={() => handleTogglePlay()}
          >
            {playing === false && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 relative"
                style={{ left: "2px" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                />
              </svg>
            )}
            {playing === true && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                />
              </svg>
            )}
          </div>
          <div className="flex items-center justify-center">
            <FrameAdjust
              direction={Direction.Forward}
              frameLength={frameLength}
              keyboardShortcutsEnabled={keyboardShortcutsEnabled}
              seeking={seeking}
              videoEl={videoEl}
              onGotoTime={onGotoTime}
            />
          </div>
        </div>
        <div className="basis-1/3 flex items-center justify-end gap-2">
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
              d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z"
            />
          </svg>

          <div className="w-32">
            <Volume videoEl={videoEl} volume={volume} />
          </div>
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
              d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
            />
          </svg>
        </div>
      </div>
      <div className="mt-4">
        <Progress
          currentTime={currentTime}
          duration={duration}
          onGotoTime={onGotoTime}
          seeking={seeking}
        />
      </div>
    </div>
  );
};

export default VideoNavigationControls;
