import * as React from "react";
import { secondsToHms } from "services/time";
import ReactSlider from "react-slider";

import FrameAdjust from "./VideoNavigationControls/FrameAdjust";

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
  const onSliderChange = React.useCallback((value: number) => {
    onGotoTime(value);
  }, []);

  const handlePlay = React.useCallback(() => {
    onPlay();
  }, []);

  const handlePause = React.useCallback(() => {
    onPause();
  }, []);

  return (
    <div className="bg-black flex items-stretch h-12 gap-4">
      {showPlay && (
        <button className="videoControl" onClick={() => handlePlay()}>
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
      )}
      {showPause && (
        <button className="videoControl" onClick={() => handlePause()}>
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
      )}
      <div className="videoControl flex items-center">
        <span>
          {secondsToHms(Math.round(currentTime))} /{" "}
          {secondsToHms(Math.round(duration))}
        </span>
      </div>
      <FrameAdjust
        distance={-1}
        frameLength={frameLength}
        onGotoTime={onGotoTime}
        videoEl={videoEl}
      />
      <div className="flex-grow videoControl p-0">
        <ReactSlider
          className="h-12 flex items-center horizontal-slider"
          thumbClassName="bg-green-500 outline-4 px-2 w-4 h-4 rounded-full"
          trackClassName="h-2 bg-red-600"
          renderThumb={(props, state) => <div {...props} />}
          onChange={(value, thumbIndex) => onSliderChange(value)}
          onSliderClick={(value) => onSliderChange(value)}
          min={0}
          max={duration}
          step={0.1}
          value={currentTime}
        />
      </div>
      <FrameAdjust
        distance={1}
        frameLength={frameLength}
        onGotoTime={onGotoTime}
        videoEl={videoEl}
      />
    </div>
  );
};

export default VideoNavigationControls;
