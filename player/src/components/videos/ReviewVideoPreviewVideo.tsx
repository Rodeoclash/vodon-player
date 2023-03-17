import * as React from "react";
import { observer } from "mobx-react-lite";
import Video from "services/models/video";

import ReviewVideoPreviewMessage from "components/videos/ReviewVideoPreviewMessage";
import ReviewVideoRequestPermission from "components/videos/ReviewVideoRequestPermission";

import { MessageKind } from "components/videos/ReviewVideoPreviewMessage";

type Props = {
  video: Video;
};

const ReviewVideoPreview = observer(({ video }: Props) => {
  const containerEl = React.useRef<null | HTMLDivElement>(null);
  const selectedVideo = video.session.selectedVideo;

  const handleClick = () => {
    if (
      video.beforePlayableRange === true ||
      video.afterPlayableRange === true
    ) {
      return;
    }

    video.session.selectVideo(video);
  };

  React.useEffect(() => {
    if (
      containerEl.current === null ||
      video.reviewVideoEl === null ||
      (selectedVideo !== null && selectedVideo.id === video.id) ||
      video.beforePlayableRange === true ||
      video.videoElementsCreated === true
    ) {
      return;
    }

    video.reviewVideoEl.volume = 0;
    containerEl.current.appendChild(video.reviewVideoEl);
  }, [
    selectedVideo,
    video.afterPlayableRange,
    video.beforePlayableRange,
    video.videoElementsCreated,
  ]);

  // If we don't have permissions to access the video, display a special
  // clickable component which can be used to rerequest permission to access
  // the video again
  if (video.localFileHandlePermission === "prompt") {
    return <ReviewVideoRequestPermission video={video} />;
  }

  // We can't display the video in two places, so set a message instead here
  if (selectedVideo !== null && selectedVideo.id === video.id) {
    return (
      <ReviewVideoPreviewMessage
        video={video}
        messageKind={MessageKind.Playing}
      />
    );
  }

  // Before the range that this video is visible in, set a message
  if (video.beforePlayableRange === true) {
    return (
      <ReviewVideoPreviewMessage
        video={video}
        messageKind={MessageKind.BeforeRange}
      />
    );
  }

  // After the range that this video is visible in, set a message
  if (video.afterPlayableRange === true) {
    return (
      <ReviewVideoPreviewMessage
        video={video}
        messageKind={MessageKind.AfterRange}
      />
    );
  }

  const style = { aspectRatio: `${video.width}/${video.height}` };

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
      <div
        className="absolute inset-0 z-10 reviewVideo z-10"
        ref={containerEl}
      />
    </div>
  );
});

export default ReviewVideoPreview;
