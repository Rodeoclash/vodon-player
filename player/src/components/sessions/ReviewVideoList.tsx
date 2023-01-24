import { observer } from "mobx-react-lite";
import Session from "services/models/session";

import ReviewVideoPreview from "components/videos/ReviewVideoPreview";

type Props = {
  session: Session;
};

const ReviewVideoList = observer(({ session }: Props) => {
  const renderedReviewVideos = session.videos.map((video) => (
    <ReviewVideoPreview key={video.id} video={video} />
  ));

  if (renderedReviewVideos.length === 0) {
    return null;
  }

  return <>{renderedReviewVideos}</>;
});

export default ReviewVideoList;
