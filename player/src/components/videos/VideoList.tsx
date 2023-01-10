import { observer } from "mobx-react-lite";
import Session from "services/models/session";

import VideoListItem from "./VideoListItem";

type Props = {
  session: Session;
};

const VideoList = observer(({ session }: Props) => {
  const videos = session.videos.map((video) => (
    <VideoListItem key={video.id} video={video} />
  ));

  if (videos.length === 0) {
    return <em>No videos in this session</em>;
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th className="th">ID</th>
          <th className="th">Local file handle exists</th>
          <th className="th">Local file handle permission state</th>
          <th className="th">Copy progress</th>
          <th className="th">OPFS file handle exists</th>
          <th className="th">Player</th>
        </tr>
      </thead>
      <tbody>{videos}</tbody>
    </table>
  );
});

export default VideoList;
