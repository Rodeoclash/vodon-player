import * as React from "react";
import { observer } from "mobx-react-lite";
import Video from "services/models/video";

type Props = {
  video: Video;
};

const ReviewVideoPreview = observer(({ video }: Props) => {
  const containerEl = React.useRef<null | HTMLDivElement>(null);
  const selectedVideo = video.session.selectedVideo;

  const handleClick = React.useCallback(() => {
    video.session.selectVideo(video);
  }, [video]);

  React.useEffect(() => {
    if (
      containerEl.current === null ||
      video.reviewVideoEl === null ||
      (selectedVideo !== null && selectedVideo.id === video.id)
    ) {
      return;
    }

    containerEl.current.appendChild(video.reviewVideoEl);
  }, [selectedVideo]);

  const style = { aspectRatio: `${video.width}/${video.height}` };

  const renderedContent = (() => {
    if (selectedVideo !== null && selectedVideo.id === video.id) {
      return (
        <div className="flex items-center justify-center w-full italic text-white/50">
          Video selected
        </div>
      );
    }

    return <div ref={containerEl} className="w-full" />;
  })();

  return (
    <div
      style={style}
      className="relative bg-stone-800 flex items-stretch justify-items-stretch"
      onClick={() => handleClick()}
    >
      <div className="absolute top-0 left-0 bg-black/70 px-2">
        <h3>{video.name}</h3>
      </div>
      {renderedContent}
    </div>
  );
});

export default ReviewVideoPreview;
