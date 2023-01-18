import * as React from "react";

type Props = {
  distance: number;
  frameLength: number;
  onGotoTime: (newTime: number) => void;
  videoEl: HTMLVideoElement;
};

const FrameAdjust = ({ distance, frameLength, onGotoTime, videoEl }: Props) => {
  const [active, setActive] = React.useState<boolean | null>(null);

  const handleMouseDown = React.useCallback(() => {
    setActive(true);
    onGotoTime(videoEl.currentTime + frameLength * distance);
  }, [setActive, onGotoTime]);

  const handleMouseUp = React.useCallback(() => {
    setActive(false);
  }, [setActive, onGotoTime]);

  React.useEffect(() => {
    if (active === false || active === null) {
      return;
    }

    const interval = setInterval(() => {
      onGotoTime(videoEl.currentTime + frameLength * distance);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [active, videoEl]);

  const renderedLeftArrow = (
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
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </svg>
  );

  const renderedRightArrow = (
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
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  );

  return (
    <button
      onMouseDown={() => handleMouseDown()}
      onMouseUp={() => handleMouseUp()}
    >
      {distance < 0 ? renderedLeftArrow : renderedRightArrow}
    </button>
  );
};

export default FrameAdjust;
