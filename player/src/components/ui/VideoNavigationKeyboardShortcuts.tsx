import * as React from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { FRAME_ADVANCE_INTERVAL } from "services/settings";
import { UnknownDirection } from "services/errors";

import { Direction } from "./VideoNavigationControls/FrameAdjust";

type Props = {
  frameLength: number;
  keyboardShortcutsEnabled: boolean;
  onGotoTime: (newTime: number) => void;
  onPause: () => void;
  onPlay: () => void;
  playing: boolean;
  seeking: boolean;
  videoEl: HTMLVideoElement;
};

const VideoNavigationControls = ({
  frameLength,
  keyboardShortcutsEnabled,
  onGotoTime,
  onPause,
  onPlay,
  playing,
  seeking,
  videoEl,
}: Props) => {
  const [frameNavigationHeld, setFrameNavigationHeld] =
    React.useState<Direction | null>(null);

  const [jumpNavigationHeld, setJumpNavigationHeld] =
    React.useState<Direction | null>(null);

  // Toggle playing of the video on and off depending on the current state
  const handleTogglePlay = () => {
    if (playing === true) {
      onPause();
    } else {
      onPlay();
    }
  };

  // go back one frame, used by frame control buttons and keyboard shortcuts
  const handleBackFrame = () => {
    onGotoTime(videoEl.currentTime + frameLength * -1);
  };

  // go forward one frame, used by frame control buttons and keyboard shortcuts
  const handleForwardFrame = () => {
    onGotoTime(videoEl.currentTime + frameLength * 1);
  };

  // jump forward by a set amount (currently 1 second, needs to be configurable)
  const handleForwardJump = () => {
    onGotoTime(videoEl.currentTime + 1);
  };

  // jump back by a set amount (currently 1 second, needs to be configurable)
  const handleBackJump = () => {
    onGotoTime(videoEl.currentTime - 1);
  };

  useHotkeys(
    "space",
    (event) => {
      event.stopPropagation();
      event.preventDefault();

      if (keyboardShortcutsEnabled === false) {
        return;
      }
      handleTogglePlay();
    },
    [keyboardShortcutsEnabled, playing]
  );

  /**
   * Frame navigation
   */
  useHotkeys(
    "a,arrowLeft",
    () => {
      if (keyboardShortcutsEnabled === false) {
        return;
      }
      handleBackFrame();
      setFrameNavigationHeld(Direction.Back);
    },
    {
      keydown: true,
    },
    [keyboardShortcutsEnabled]
  );

  useHotkeys(
    "a,arrowLeft",
    () => {
      setFrameNavigationHeld(null);
    },
    {
      keyup: true,
    },
    [keyboardShortcutsEnabled]
  );

  useHotkeys(
    "d,arrowRight",
    () => {
      if (keyboardShortcutsEnabled === false) {
        return;
      }
      handleForwardFrame();
      setFrameNavigationHeld(Direction.Forward);
    },
    {
      keydown: true,
    },
    [keyboardShortcutsEnabled]
  );

  useHotkeys(
    "d,arrowRight",
    () => {
      setFrameNavigationHeld(null);
    },
    {
      keyup: true,
    },
    [keyboardShortcutsEnabled]
  );

  React.useEffect(() => {
    if (seeking === true || frameNavigationHeld === null) {
      return;
    }

    const interval = setInterval(() => {
      switch (frameNavigationHeld) {
        case Direction.Back:
          handleBackFrame();
          break;
        case Direction.Forward:
          handleForwardFrame();
          break;
        default:
          throw new UnknownDirection(
            `A direction was passed to navigate by frame but we didn't understand it (was: ${frameNavigationHeld})`
          );
      }
    }, FRAME_ADVANCE_INTERVAL);

    return () => {
      clearInterval(interval);
    };
  }, [frameNavigationHeld, seeking]);

  /**
   * Jump navigation
   */
  useHotkeys(
    "w,arrowUp",
    () => {
      if (keyboardShortcutsEnabled === false) {
        return;
      }
      handleForwardJump();
      setJumpNavigationHeld(Direction.Forward);
    },
    {
      keydown: true,
    },
    [keyboardShortcutsEnabled]
  );

  useHotkeys(
    "w,arrowUp",
    () => {
      setJumpNavigationHeld(null);
    },
    {
      keyup: true,
    },
    [keyboardShortcutsEnabled]
  );

  useHotkeys(
    "s,arrowDown",
    () => {
      if (keyboardShortcutsEnabled === false) {
        return;
      }
      handleBackJump();
      setJumpNavigationHeld(Direction.Back);
    },
    {
      keydown: true,
    },
    [keyboardShortcutsEnabled]
  );

  useHotkeys(
    "s,arrowDown",
    () => {
      setJumpNavigationHeld(null);
    },
    {
      keyup: true,
    },
    [keyboardShortcutsEnabled]
  );

  React.useEffect(() => {
    if (seeking === true || jumpNavigationHeld === null) {
      return;
    }

    const interval = setInterval(() => {
      switch (jumpNavigationHeld) {
        case Direction.Back:
          handleBackJump();
          break;
        case Direction.Forward:
          handleForwardJump();
          break;
        default:
          throw new UnknownDirection(
            `A direction was passed to navigate by jump but we didn't understand it (was: ${frameNavigationHeld})`
          );
      }
    }, FRAME_ADVANCE_INTERVAL);

    return () => {
      clearInterval(interval);
    };
  }, [jumpNavigationHeld, seeking]);

  return null;
};

export default VideoNavigationControls;
