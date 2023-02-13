import * as React from "react";
import { observer } from "mobx-react-lite";
import Video from "services/models/video";
import useVideoControls from "services/hooks/useVideoControls";
import bus from "services/bus";

import VideoSizer from "components/ui/VideoSizer";
import VideoNavigationControls from "components/ui/VideoNavigationControls";
import consolaGlobalInstance from "consola";

type Props = {
  video: Video;
};

const ReviewVideo = observer(({ video }: Props) => {
  // track the last time activity occured inside the review video, used to
  // show hide controls.
  const [lastActiveAt, setLastActiveAt] = React.useState<number | null>(null);

  // track when the user is actually interacting with a control area on the
  // screen, this is used to prevent the controls from being removed when
  // the user is interacting with them.
  const [controlsHovered, setControlsHovered] = React.useState<boolean | null>(
    null
  );

  const containerEl = React.useRef<null | HTMLDivElement>(null);

  const [gotoTime, pause, play, setVolume] = useVideoControls(
    video.reviewVideoEl
  );

  const handleMouseEnter = () => {
    setLastActiveAt(Date.now());
  };

  const handleMouseLeave = () => {
    setLastActiveAt(null);
  };

  const handleMouseMove = () => {
    setLastActiveAt(Date.now());
  };

  const handlePause = () => {
    pause();
    bus.emit("video.pause", video);
  };

  const handlePlay = () => {
    play();
    bus.emit("video.play", video);
  };

  const handleGotoTime = (newTime: number) => {
    gotoTime(newTime);
    bus.emit("video.gotoTime", video, newTime);
  };

  const handleChangeVolume = (newVolume: number) => {
    if (video.reviewVideoEl === null) {
      return;
    }

    video.setVolume(newVolume);
    setVolume(newVolume);
  };

  // Mount the video when it is selected
  React.useEffect(() => {
    if (
      video === null ||
      containerEl.current === null ||
      video.reviewVideoEl === null
    ) {
      return;
    }

    video.reviewVideoEl.volume = video.volume;
    containerEl.current.appendChild(video.reviewVideoEl);
  }, [video.videoElementsCreated, video]);

  // Hide controls after inactivity
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setLastActiveAt(null);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [lastActiveAt]);

  // When the video is changed, set the activity of it to now so that the name
  // and controls appear briefly.
  React.useEffect(() => {
    setLastActiveAt(Date.now());
  }, [video]);

  return (
    <div
      className="w-full h-full relative"
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
      onMouseMove={() => handleMouseMove()}
    >
      {lastActiveAt !== null && (
        <div className="absolute top-0 left-0 right-0 z-10 bg-zinc-900/80 p-4 text-center text-2xl">
          {video.name}
        </div>
      )}
      <VideoSizer aspectRatio={`${video.width}:${video.height}`}>
        <div ref={containerEl} className="w-full h-full" />
      </VideoSizer>
      {video.reviewVideoEl !== null &&
        video.duration !== null &&
        video.frameLength !== null && (
          <div
            className="absolute bottom-0 left-0 right-0 z-10 bg-zinc-900/80 p-4"
            onMouseEnter={() => setControlsHovered(true)}
            onMouseLeave={() => setControlsHovered(false)}
          >
            <VideoNavigationControls
              currentTime={video.currentTime}
              duration={video.duration}
              frameLength={video.frameLength}
              keyboardShortcutsEnabled={true}
              onChangeVolume={(newVolume) => handleChangeVolume(newVolume)}
              onGotoTime={(time) => handleGotoTime(time)}
              onPause={() => handlePause()}
              onPlay={() => handlePlay()}
              playing={video.reviewVideoPlaying === true}
              seeking={video.reviewVideoSeeking === true}
              videoEl={video.reviewVideoEl}
              visible={lastActiveAt !== null || controlsHovered === true}
              volume={video.volume}
            />
          </div>
        )}
    </div>
  );
});

export default ReviewVideo;
