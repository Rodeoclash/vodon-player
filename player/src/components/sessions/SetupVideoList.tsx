import { observer } from "mobx-react-lite";
import Session from "services/models/session";

import SetupVideo from "../videos/SetupVideo";

type Props = {
  session: Session;
};

const SetupVideoList = observer(({ session }: Props) => {
  const renderedSetupVideos = session.videos.map((video) => (
    <SetupVideo key={video.id} video={video} />
  ));

  if (renderedSetupVideos.length === 0) {
    return <em>No videos in this session</em>;
  }

  return <>{renderedSetupVideos}</>;
});

export default SetupVideoList;
