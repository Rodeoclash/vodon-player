import * as React from "react";
import { FRAME_ADVANCE_INTERVAL } from "services/settings";

export enum Direction {
  Forward,
  Back,
}

type Props = {
  direction: Direction;
  onClick: () => void;
  seeking: boolean;
};

const FrameAdjust = ({ direction, onClick, seeking }: Props) => {
  const [active, setActive] = React.useState<boolean | null>(null);

  const handleMouseDown = () => {
    setActive(true);
    onClick();
  };

  const handleMouseUp = () => {
    setActive(false);
  };

  const handleMouseLeave = () => {
    setActive(false);
  };

  React.useEffect(() => {
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
