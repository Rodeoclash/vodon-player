import * as React from "react";
import { secondsToHms } from "services/time";

import FrameAdjust from "./VideoNavigationControls/FrameAdjust";
import Progress from "./VideoNavigationControls/Progress";
import Volume from "./VideoNavigationControls/Volume";

type Props = {
  currentTime: number;
  duration: number;
  videoEl: HTMLVideoElement;
  frameLength: number;
  onGotoTime: (newTime: number) => void;
  onPause: () => void;
  onPlay: () => void;
  showPause: boolean;
  showPlay: boolean;
};

const VideoNavigationControls = ({
  currentTime,
  duration,
  frameLength,
  onGotoTime,
  onPause,
  onPlay,
  showPause,
  showPlay,
  videoEl,
}: Props) => {
  const handlePlay = React.useCallback(() => {
    onPlay();
  }, []);

  const handlePause = React.useCallback(() => {
    onPause();
  }, []);

  return (
    <div className="bg-black flex items-stretch h-12 gap-4">
      {showPlay && (
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
      {showPause && (
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
          distance={-1}
          frameLength={frameLength}
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
          distance={1}
          frameLength={frameLength}
          onGotoTime={onGotoTime}
          videoEl={videoEl}
        />
      </div>
      <div className="videoControl">
        <Volume videoEl={videoEl} />
      </div>
    </div>
  );
};

export default VideoNavigationControls;
