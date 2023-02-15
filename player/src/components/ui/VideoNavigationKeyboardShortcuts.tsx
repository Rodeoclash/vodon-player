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

  // Toggle playing of the video on and off depending on the current state
  // TODO: Push logic to parent
  const handleTogglePlay = () => {
    if (playing === true) {
      onPause();
    } else {
      onPlay();
    }
  };

  // go back one frame, used by frame control buttons and keyboard shortcuts
  // TODO: Push logic to parent
  const handleBackFrame = () => {
    onGotoTime(videoEl.currentTime + frameLength * -1);
  };

  // go forward one frame, used by frame control buttons and keyboard shortcuts
  // TODO: Push logic to parent
  const handleForwardFrame = () => {
    onGotoTime(videoEl.currentTime + frameLength * 1);
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

  return null;
};

export default VideoNavigationControls;
