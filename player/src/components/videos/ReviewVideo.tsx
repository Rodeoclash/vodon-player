import * as React from "react";
import { observer } from "mobx-react-lite";
import Video from "services/models/video";
import useVideoControls from "services/hooks/useVideoControls";
import bus from "services/bus";

import Drawing from "components/ui/Drawing";
import DrawingControls from "components/ui/Drawing/DrawingControls";
import VideoSizer from "components/ui/VideoSizer";
import VideoNavigationControls from "components/ui/VideoNavigationControls";
import VideoNavigationKeyboardShortcuts from "components/ui/VideoNavigationKeyboardShortcuts";
import { TldrawApp } from "@tldraw/tldraw";

type Props = {
  hideOverlays: boolean;
  video: Video;
};

const ReviewVideo = observer(({ hideOverlays, video }: Props) => {
  // Track when the mouse is over the video to show the controls
  const [dimensionsReady, setDimensionsReady] = React.useState<boolean | null>(
    null
  );

  // Track when the mouse is over the video to show the controls
  const [mouseActive, setMouseActive] = React.useState<boolean | null>(true);

  // track when the user is actually interacting with a control area on the
  // screen, this is used to prevent the controls from being removed when
  // the user is interacting with them.
  const [controlsHovered, setControlsHovered] = React.useState<boolean | null>(
    null
  );

  // Holds the mounted of instance of the TLDraw app. This is passed down to
  // the drawing controls widget.
  const [tlDrawInstance, setTlDrawInstance] = React.useState<TldrawApp | null>(
    null
  );

  const containerEl = React.useRef<null | HTMLDivElement>(null);

  const [gotoTime, pause, play, setVolume] = useVideoControls(
    video.reviewVideoEl
  );

  const handleMouseEnter = () => {
    setMouseActive(true);
  };

  const handleMouseLeave = () => {
    setMouseActive(true);
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

  const handleTLDrawMounted = (app: TldrawApp) => {
    setTlDrawInstance(app);
  };

  const handleDimensionsMounted = () => {
    setDimensionsReady(true);
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
  }, [video.videoElementsCreated, video, dimensionsReady]);

  return (
    <div className="w-full h-full relative">
      {mouseActive === true && hideOverlays === false && (
        <div className="absolute top-0 left-0 right-0 z-20 flex justify-center pointer-events-none">
          <div className="bg-zinc-900/80 py-4 px-6 text-center text-2xl">
            {video.name}
          </div>
        </div>
      )}
      <VideoSizer
        originalWidth={video.width}
        originalHeight={video.height}
        onMount={() => handleDimensionsMounted()}
      >
        {({ width, height, scale }) => {
          const dimensionsStyle = {
            width: `${width}px`,
            height: `${height}px`,
          };

          return (
            <div
              style={dimensionsStyle}
              className="relative"
              onMouseEnter={() => handleMouseEnter()}
              onMouseLeave={() => handleMouseLeave()}
            >
              <div className="absolute inset-0 z-20">
                <Drawing
                  scale={scale}
                  onMount={(app) => handleTLDrawMounted(app)}
                />
              </div>
              <div
                className="absolute inset-0 z-10 reviewVideo"
                ref={containerEl}
              />
            </div>
          );
        }}
      </VideoSizer>
      {video.reviewVideoEl !== null &&
        video.duration !== null &&
        hideOverlays === false &&
        (mouseActive === true || controlsHovered === true) &&
        video.frameLength !== null && (
          <div
            className="absolute bottom-0 left-0 right-0 z-20 bg-zinc-900/80 p-4"
            onMouseEnter={() => setControlsHovered(true)}
            onMouseLeave={() => setControlsHovered(false)}
          >
            <VideoNavigationControls
              currentTime={video.currentTime}
              duration={video.duration}
              frameLength={video.frameLength}
              onChangeVolume={(newVolume) => handleChangeVolume(newVolume)}
              onGotoTime={(time) => handleGotoTime(time)}
              onPause={() => handlePause()}
              onPlay={() => handlePlay()}
              playing={video.reviewVideoPlaying === true}
              seeking={video.reviewVideoSeeking === true}
              videoEl={video.reviewVideoEl}
              volume={video.volume}
            />
          </div>
        )}
      {video.reviewVideoEl !== null && video.frameLength !== null && (
        <VideoNavigationKeyboardShortcuts
          frameLength={video.frameLength}
          keyboardShortcutsEnabled={true}
          onGotoTime={(time) => handleGotoTime(time)}
          onPause={() => handlePause()}
          onPlay={() => handlePlay()}
          playing={video.reviewVideoPlaying === true}
          seeking={video.reviewVideoPlaying === true}
          videoEl={video.reviewVideoEl}
        />
      )}
      {tlDrawInstance !== null &&
        hideOverlays === false &&
        (mouseActive === true || controlsHovered === true) && (
          <div
            className="absolute left-0 top-0 bottom-0 z-20 flex justify-center items-center pointer-events-none"
            onMouseEnter={() => setControlsHovered(true)}
            onMouseLeave={() => setControlsHovered(false)}
          >
            <div className="bg-stone-800 p-2 pointer-events-auto">
              <DrawingControls app={tlDrawInstance} />
            </div>
          </div>
        )}
    </div>
  );
});

export default ReviewVideo;
