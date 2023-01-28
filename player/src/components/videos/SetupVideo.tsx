import * as React from "react";
import { observer } from "mobx-react-lite";
import Video from "services/models/video";
import useVideoControls from "services/hooks/useVideoControls";

import VideoNavigationControls from "components/ui/VideoNavigationControls";
import Toolbar from "components/videos/Toolbar";

type Props = {
  video: Video;
};

const SetupListItem = observer(({ video }: Props) => {
  const [active, setActive] = React.useState<boolean | null>(false);
  const containerEl = React.useRef<null | HTMLDivElement>(null);
  const [gotoTime, pause, play, setVolume] = useVideoControls(
    video.setupVideoEl
  );

  const handleMouseEnter = React.useCallback(() => {
    setActive(true);
  }, []);

  const handleMouseLeave = React.useCallback(() => {
    setActive(false);
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
    <div
      className="relative"
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >
      {active === true && (
        <div className="absolute top-0 left-0 right-0 z-10 bg-zinc-900/80 p-4">
          <Toolbar video={video} />
        </div>
      )}
      <div ref={containerEl} />
      {video.setupVideoEl !== null &&
        video.duration !== null &&
        video.frameLength !== null && (
          <div className="absolute bottom-0 left-0 right-0 z-10 bg-zinc-900/80 p-4">
            <VideoNavigationControls
              currentTime={video.offset}
              duration={video.duration}
              frameLength={video.frameLength}
              keyboardShortcutsEnabled={!!active}
              onChangeVolume={(newVolume) => handleChangeVolume(newVolume)}
              onGotoTime={(time) => gotoTime(time)}
              onPause={() => pause()}
              onPlay={() => play()}
              playing={video.setupVideoPlaying === true}
              seeking={video.setupVideoSeeking === true}
              videoEl={video.setupVideoEl}
              visible={active === true}
              volume={video.volume}
            />
          </div>
        )}
    </div>
  );
});

export default SetupListItem;
