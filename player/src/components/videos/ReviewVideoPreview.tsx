import * as React from "react";
import { observer } from "mobx-react-lite";
import { secondsToHms } from "services/time";
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

  const handleClick = () => {
    if (videoNotStarted === true || videoFinished === true) {
      return;
    }

    video.session.selectVideo(video);
  };

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

  const renderedMessage = (() => {
    if (selectedVideo !== null && selectedVideo.id === video.id) {
      return "Playing in main window";
    }

    if (videoNotStarted === true) {
      return `Video starts at ${secondsToHms(video.beginsAt)}`;
    }

    if (videoFinished === true) {
      return `Video finished at ${secondsToHms(video.finishesAt)}`;
    }

    return null;
  })();

  return (
    <div
      style={style}
      className="relative bg-zinc-800 flex items-stretch justify-items-stretch cursor-pointer"
      onClick={() => handleClick()}
    >
      <div className="absolute top-0 left-0 bg-black/70 px-2 z-30">
        <h3>
          {video.index + 1}. {video.name}
        </h3>
      </div>
      {renderedMessage !== null && (
        <div className="absolute inset-0 flex items-center justify-center italic text-white/50 z-20 bg-zinc-800">
          {renderedMessage}
        </div>
      )}
      <div
        className="absolute inset-0 z-10 reviewVideo z-10"
        ref={containerEl}
      />
    </div>
  );
});

export default ReviewVideoPreview;
