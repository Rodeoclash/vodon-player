import * as React from "react";
import { observer } from "mobx-react-lite";
import Video from "services/models/video";
import useVideoControls from "services/hooks/useVideoControls";

import VideoNavigationControls from "components/ui/VideoNavigationControls";
import VideoNavigationKeyboardShortcuts from "components/ui/VideoNavigationKeyboardShortcuts";
import Toolbar from "components/videos/Toolbar";

type Props = {
  video: Video;
};

const SetupListItem = observer(({ video }: Props) => {
  const containerEl = React.useRef<null | HTMLDivElement>(null);
  const [gotoTime, pause, play, setVolume] = useVideoControls(
    video.setupVideoEl
  );

  const handleMouseEnter = React.useCallback(() => {
    video.setSetupVideoHovered(true);
  }, []);

  const handleMouseLeave = React.useCallback(() => {
    video.setSetupVideoHovered(false);
  }, []);

  const handleChangeVolume = (newVolume: number) => {
    video.setVolume(newVolume);
    setVolume(newVolume);
  };

  // Once the local file handle is present, append it to the player
  React.useEffect(() => {
    if (containerEl.current === null || video.setupVideoEl === null) {
      return;
    }

    containerEl.current.appendChild(video.setupVideoEl);
  }, [video.videoElementsCreated]);

  // On leaving this element, grab the current frame of the video and save it

  // This video isn't ready for some reason
  if (
    video.videoElementsCreated === false ||
    video.videoElementsCreated === null
  ) {
    return (
      <div>
        <p>Processing</p>
        {video.copyToStorageProgress && (
          <progress max={1} value={video.copyToStorageProgress} />
        )}
      </div>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >
      {video.setupVideoHovered === true && (
        <div className="absolute top-0 left-0 right-0 z-10 bg-zinc-900/80 p-4">
          <Toolbar video={video} />
        </div>
      )}
      <div ref={containerEl} />
      {video.setupVideoEl !== null &&
        video.duration !== null &&
        video.setupVideoHovered === true &&
        video.frameLength !== null && (
          <div className="absolute bottom-0 left-0 right-0 z-10 bg-zinc-900/80 p-4">
            <VideoNavigationControls
              currentTime={video.offset}
              duration={video.duration}
              frameLength={video.frameLength}
              onChangeVolume={(newVolume) => handleChangeVolume(newVolume)}
              onGotoTime={(time) => gotoTime(time)}
              onPause={() => pause()}
              onPlay={() => play()}
              playing={video.setupVideoPlaying === true}
              seeking={video.setupVideoSeeking === true}
              videoEl={video.setupVideoEl}
              volume={video.volume}
            />
          </div>
        )}
      {video.setupVideoEl !== null &&
        video.duration !== null &&
        video.frameLength !== null && (
          <VideoNavigationKeyboardShortcuts
            frameLength={video.frameLength}
            keyboardShortcutsEnabled={video.setupVideoHovered === true}
            onGotoTime={(time) => gotoTime(time)}
            onPause={() => pause()}
            onPlay={() => play()}
            playing={video.setupVideoPlaying === true}
            seeking={video.setupVideoSeeking === true}
            videoEl={video.setupVideoEl}
          />
        )}
    </div>
  );
});

export default SetupListItem;
