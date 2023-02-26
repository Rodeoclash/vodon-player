import * as React from "react";
import { observer } from "mobx-react-lite";
import Video from "services/models/video";

type Props = {
  video: Video;
};

const ReviewVideoPreview = observer(({ video }: Props) => {
  const [videoNotStarted, setVideoNotStarted] = React.useState<boolean | null>(
    null
  );
  const [videoFinished, setVideoFinished] = React.useState<boolean | null>(
    null
  );
  const containerEl = React.useRef<null | HTMLDivElement>(null);
  const selectedVideo = video.session.selectedVideo;

  const handleClick = React.useCallback(() => {
    video.session.selectVideo(video);
  }, [video]);

  React.useEffect(() => {
    if (
      containerEl.current === null ||
      video.reviewVideoEl === null ||
      (selectedVideo !== null && selectedVideo.id === video.id) ||
      videoNotStarted === true ||
      videoFinished === true
    ) {
      return;
    }

    video.reviewVideoEl.volume = 0;
    containerEl.current.appendChild(video.reviewVideoEl);
  }, [
    video.videoElementsCreated,
    selectedVideo,
    videoNotStarted,
    videoFinished,
  ]);

  React.useEffect(() => {
    if (
      video.session.currentTime == null ||
      video.beginsAt === null ||
      video.finishesAt === null
    ) {
      return;
    }

    setVideoNotStarted(video.session.currentTime < video.beginsAt);
    setVideoFinished(video.session.currentTime > video.finishesAt);
  }, [video.session.currentTime, video.beginsAt, video.finishesAt]);

  const style = { aspectRatio: `${video.width}/${video.height}` };

  const renderedContent = (() => {
    if (videoNotStarted === null) {
      return null;
    }

    if (selectedVideo !== null && selectedVideo.id === video.id) {
      return (
        <div className="flex items-center justify-center w-full italic text-white/50">
          Playing in main window
        </div>
      );
    }

    if (videoNotStarted === true) {
      return (
        <div className="flex items-center justify-center w-full italic text-white/50">
          Before video starts
        </div>
      );
    }

    if (videoFinished === true) {
      return (
        <div className="flex items-center justify-center w-full italic text-white/50">
          Video finished
        </div>
      );
    }

    return <div ref={containerEl} className="w-full" />;
  })();

  return (
    <div
      style={style}
      className="relative bg-zinc-800 flex items-stretch justify-items-stretch cursor-pointer outline-sky-500 hover:outline hover:z-10"
      onClick={() => handleClick()}
    >
      <div className="absolute top-0 left-0 bg-black/70 px-2">
        <h3>
          {video.index + 1}. {video.name}
        </h3>
      </div>
      {renderedContent}
    </div>
  );
});

export default ReviewVideoPreview;
