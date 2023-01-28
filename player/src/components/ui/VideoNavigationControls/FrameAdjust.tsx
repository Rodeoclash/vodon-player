import * as React from "react";

export enum Direction {
  Forward,
  Back,
}

type Props = {
  direction: Direction;
  onClick: () => void;
  seeking: boolean;
};

const FRAME_ADVANCE_INTERVAL = 100;

const FrameAdjust = ({ direction, onClick, seeking }: Props) => {
  const [active, setActive] = React.useState<boolean | null>(null);

  const handleMouseDown = React.useCallback(() => {
    setActive(true);
    onClick();
  }, []);

  const handleMouseUp = React.useCallback(() => {
    setActive(false);
  }, []);

  const handleMouseLeave = React.useCallback(() => {
    setActive(false);
  }, []);

  React.useEffect(() => {
    // Abort setting up the interval if we're not active or a seek is already
    // in progress (which overwhelms the video)
    if (active === false || active === null || seeking === true) {
      return;
    }

    const interval = setInterval(() => {
      onClick();
    }, FRAME_ADVANCE_INTERVAL);

    return () => {
      clearInterval(interval);
    };
  }, [active, seeking]);

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
      onMouseLeave={() => handleMouseLeave()}
    >
      {direction === Direction.Back ? renderedLeftArrow : renderedRightArrow}
    </button>
  );
};

export default FrameAdjust;
