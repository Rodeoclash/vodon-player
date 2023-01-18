import * as React from "react";
import { observer } from "mobx-react-lite";
import Video from "services/models/video";

import VideoNavigationControls from "components/ui/VideoNavigationControls";
import Toolbar from "components/videos/Toolbar";

type Props = {
  video: Video;
};

const SetupList = observer(({ video }: Props) => {
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

  return (
    <div className="relative">
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
            onGotoTime={(newTime) => handleGotoTime(newTime)}
            onPause={() => handlePause()}
            onPlay={() => handlePlay()}
            showPause={video.setupVideoPlaying === true}
            showPlay={video.setupVideoPlaying === false}
            videoEl={video.setupVideoEl}
          />
        )}
    </div>
  );
});

export default SetupList;
