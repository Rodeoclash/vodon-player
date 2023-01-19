import * as React from "react";
import { observer } from "mobx-react-lite";
import Video from "services/models/video";
import classNames from "classnames";

import VideoNavigationControls from "components/ui/VideoNavigationControls";
import Toolbar from "components/videos/Toolbar";

type Props = {
  video: Video;
};

const SetupList = observer(({ video }: Props) => {
  const [active, setActive] = React.useState<boolean | null>(null);
  const containerEl = React.useRef<null | HTMLDivElement>(null);

  // Play the video when play clicked in the controls
  const handlePlay = React.useCallback(() => {
    if (video.setupVideoEl === null) {
      return;
    }

    video.setupVideoEl.play();
  }, [video]);

  // Pause the video when pause clicked in the controls
  // TODO: Move to video controls service
  const handlePause = React.useCallback(() => {
    if (video.setupVideoEl === null) {
      return;
    }

    video.setupVideoEl.pause();
  }, [video]);

  const handleGotoTime = React.useCallback(
    (newTime: number) => {
      if (video.setupVideoEl === null) {
        return;
      }

      video.setupVideoEl.currentTime = newTime;
    },
    [video]
  );

  const handleMouseEnter = React.useCallback(() => {
    setActive(true);
  }, []);

  const handleMouseLeave = React.useCallback(() => {
    setActive(false);
  }, []);

  // Once the local file handle is present, append it to the player
  // TODO: Move to video controls service
  React.useEffect(() => {
    if (containerEl.current === null || video.setupVideoEl === null) {
      return;
    }

    containerEl.current.appendChild(video.setupVideoEl);
  }, [video.videoElementsCreated]);

  // TODO: This will need to show any loading progress etc
  if (
    video.videoElementsCreated === false ||
    video.videoElementsCreated === null
  ) {
    return (
      <div>
        <p>Copying file</p>
        {video.copyToStorageProgress && (
          <progress max={1} value={video.copyToStorageProgress} />
        )}
      </div>
    );
  }

  const classes = classNames({
    relative: true,
    "outline outline-blue-500": active,
  });

  return (
    <div
      className={classes}
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >
      <Toolbar video={video} />
      <div ref={containerEl} />
      {video.setupVideoEl &&
        video.duration !== null &&
        video.offset !== null &&
        video.frameLength !== null && (
          <VideoNavigationControls
            currentTime={video.offset}
            duration={video.duration}
            frameLength={video.frameLength}
            keyboardShortcutsEnabled={!!active}
            onGotoTime={(newTime) => handleGotoTime(newTime)}
            onPause={() => handlePause()}
            onPlay={() => handlePlay()}
            playing={video.setupVideoPlaying === true}
            videoEl={video.setupVideoEl}
            volume={video.volume}
          />
        )}
    </div>
  );
});

export default SetupList;
