import { observer } from "mobx-react-lite";
import Session from "services/models/session";
import { useHotkeys } from "react-hotkeys-hook";

import ReviewVideoPreview from "components/videos/ReviewVideoPreviewVideo";

type Props = {
  session: Session;
};

const ReviewVideoList = observer(({ session }: Props) => {
  const videos = session.videos;

  const renderedReviewVideos = videos.map((video) => (
    <ReviewVideoPreview key={video.id} video={video} />
  ));

  [1, 2, 3, 4, 5, 6, 7, 8, 9].map((idx) => {
    useHotkeys(idx.toString(), () => {
      const selectedVideo = session.indexedVideos[idx - 1];

      if (selectedVideo) {
        session.selectVideo(selectedVideo);
      }
    });
  });

  if (renderedReviewVideos.length === 0) {
    return null;
  }

  return <>{renderedReviewVideos}</>;
});

export default ReviewVideoList;
