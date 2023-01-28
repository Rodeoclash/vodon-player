import * as React from "react";
import { observer } from "mobx-react-lite";
import Video from "services/models/video";
import useVideoControls from "services/hooks/useVideoControls";
import { InvalidVideo } from "services/errors";
import bus from "services/bus";

import { Link } from "react-router-dom";
import VideoSizer from "components/ui/VideoSizer";
import VideoNavigationControls from "components/ui/VideoNavigationControls";

type Props = {
  video: Video;
};

const ReviewVideo = observer(({ video }: Props) => {
  const [lastActiveAt, setLastActiveAt] = React.useState<number | null>(null);
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

  return (
    <div
      className="w-full h-full relative"
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
      onMouseMove={() => handleMouseMove()}
    >
      <VideoSizer aspectRatio="16:9">
        <div ref={containerEl} className="w-full h-full" />
      </VideoSizer>
      {video.reviewVideoEl !== null &&
        video.duration !== null &&
        video.frameLength !== null && (
          <div className="absolute bottom-0 left-0 right-0 z-10 bg-zinc-900/80 p-4">
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
              visible={lastActiveAt !== null}
              volume={video.volume}
            />
          </div>
        )}
    </div>
  );
});

export default ReviewVideo;
