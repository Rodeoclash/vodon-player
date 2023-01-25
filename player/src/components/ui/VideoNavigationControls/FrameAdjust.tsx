import * as React from "react";
import { useHotkeys } from "react-hotkeys-hook";

export enum Direction {
  Forward,
  Back,
}

type Props = {
  direction: Direction;
  frameLength: number;
  keyboardShortcutsEnabled: boolean;
  videoEl: HTMLVideoElement;
  seeking: boolean;
  onGotoTime: (newTime: number) => void;
};

const FRAME_ADVANCE_INTERVAL = 100;

const FrameAdjust = ({
  direction,
  frameLength,
  keyboardShortcutsEnabled,
  videoEl,
  seeking,
  onGotoTime,
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
  }, []);

  const handleMouseUp = React.useCallback(() => {
    setActive(false);
  }, []);

  const handleMouseLeave = React.useCallback(() => {
    setActive(false);
  }, []);

  useHotkeys(
    "a,arrowLeft",
    () => {
      if (
        keyboardShortcutsEnabled === false ||
        direction === Direction.Forward
      ) {
        return;
      }
      handleActivate();
      setActive(true);
    },
    {
      keydown: true,
    },
    [keyboardShortcutsEnabled]
  );

  useHotkeys(
    "a,arrowLeft",
    () => {
      if (
        keyboardShortcutsEnabled === false ||
        direction === Direction.Forward
      ) {
        return;
      }
      setActive(false);
    },
    {
      keyup: true,
    },
    [keyboardShortcutsEnabled]
  );

  useHotkeys(
    "d,arrowRight",
    () => {
      if (keyboardShortcutsEnabled === false || direction === Direction.Back) {
        return;
      }
      handleActivate();
      setActive(true);
    },
    {
      keydown: true,
    },
    [keyboardShortcutsEnabled]
  );

  useHotkeys(
    "d,arrowRight",
    () => {
      if (keyboardShortcutsEnabled === false || direction === Direction.Back) {
        return;
      }
      setActive(false);
    },
    {
      keyup: true,
    },
    [keyboardShortcutsEnabled]
  );

  React.useEffect(() => {
    // Abort setting up the interval if we're not active or a seek is already
    // in progress (which overwhelms the video)
    if (active === false || active === null || seeking === true) {
      return;
    }

    const interval = setInterval(() => {
      handleActivate();
    }, FRAME_ADVANCE_INTERVAL);

    return () => {
      clearInterval(interval);
    };
  }, [active, seeking]);

  React.useEffect(() => {
    if (keyboardShortcutsEnabled === false && active === true) {
      setActive(false);
    }
  }, [keyboardShortcutsEnabled, active]);

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
