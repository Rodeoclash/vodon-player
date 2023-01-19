import * as React from "react";

export enum Direction {
  Forward,
  Back,
}

type Props = {
  direction: Direction;
  frameLength: number;
  onGotoTime: (newTime: number) => void;
  videoEl: HTMLVideoElement;
};

const FrameAdjust = ({
  direction,
  frameLength,
  onGotoTime,
  videoEl,
}: Props) => {
  const [active, setActive] = React.useState<boolean | null>(null);

  const handleActivate = React.useCallback(() => {
    switch (direction) {
      case Direction.Forward:
        onGotoTime(videoEl.currentTime + frameLength * 1);
        break;
      case Direction.Back:
        onGotoTime(videoEl.currentTime + frameLength * -1);
        break;
    }
  }, [direction]);

  const handleMouseDown = React.useCallback(() => {
    setActive(true);
    handleActivate();
  }, [setActive, onGotoTime]);

  const handleMouseUp = React.useCallback(() => {
    setActive(false);
  }, [setActive, onGotoTime]);

  React.useEffect(() => {
    if (active === false || active === null) {
      return;
    }

    const interval = setInterval(() => {
      handleActivate();
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [active]);

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
      {direction === Direction.Back ? renderedLeftArrow : renderedRightArrow}
    </button>
  );
};

export default FrameAdjust;
