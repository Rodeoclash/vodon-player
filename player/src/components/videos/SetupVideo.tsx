import * as React from "react";
import { observer } from "mobx-react-lite";
import Video from "services/models/video";

import VideoNavigationControls from "components/ui/VideoNavigationControls";
import Toolbar from "components/videos/Toolbar";

type Props = {
  video: Video;
};

const SetupListItem = observer(({ video }: Props) => {
  const [active, setActive] = React.useState<boolean | null>(null);
  const containerEl = React.useRef<null | HTMLDivElement>(null);

  const handleMouseEnter = React.useCallback(() => {
    setActive(true);
  }, []);

  const handleMouseLeave = React.useCallback(() => {
    setActive(false);
  }, []);

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
            playing={video.setupVideoPlaying === true}
            seeking={video.setupVideoSeeking === true}
            videoEl={video.setupVideoEl}
            volume={video.volume}
          />
        )}
    </div>
  );
});

export default SetupListItem;
