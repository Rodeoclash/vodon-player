import * as React from "react";
import { observer } from "mobx-react-lite";
import Video from "services/models/video";
import useVideoControls from "services/hooks/useVideoControls";

import RequestPermission from "components/videos/RequestPermission";
import ReplaceVideo from "components/videos/ReplaceVideo";
import Toolbar from "components/videos/Toolbar";
import VideoNavigationControls from "components/ui/VideoNavigationControls";
import VideoNavigationKeyboardShortcuts from "components/ui/VideoNavigationKeyboardShortcuts";

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
  // TODO: This could be converted to observing the element property itself
  React.useEffect(() => {
    if (containerEl.current === null || video.setupVideoEl === null) {
      return;
    }

    containerEl.current.appendChild(video.setupVideoEl);
  }, [video.videoElementsCreated]);

  const renderedBody = (() => {
    // If we require the user to bring the video online
    if (video.localFileHandlePermission === "prompt") {
      return <RequestPermission video={video} />;
    }

    // If the video has gone missing for some reason
    if (video.fileMissing === true) {
      return <ReplaceVideo video={video} />;
    }

    return (
      <>
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
      </>
    );
  })();

  return (
    <div
      className="relative"
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >
      {(video.setupVideoHovered === true ||
        video.fileMissing === true ||
        video.localFileHandlePermission === "prompt") && (
        <div className="absolute top-0 left-0 right-0 z-40 bg-zinc-900/80 p-4">
          <Toolbar video={video} />
        </div>
      )}
      {renderedBody}
    </div>
  );
});

export default SetupListItem;
