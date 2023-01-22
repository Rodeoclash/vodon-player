import * as React from "react";
import { observer } from "mobx-react-lite";
import Video from "services/models/video";

type Props = {
  video: Video;
};

const ReviewVideoPreview = observer(({ video }: Props) => {
  const containerEl = React.useRef<null | HTMLDivElement>(null);

  React.useEffect(() => {
    if (containerEl.current === null || video.reviewVideoEl === null) {
      return;
    }

    containerEl.current.appendChild(video.reviewVideoEl);
  }, [video.videoElementsCreated]);

  return (
    <div>
      <h3>{video.name}</h3>
      <div ref={containerEl} className="w-full" />
    </div>
  );
});

export default ReviewVideoPreview;
