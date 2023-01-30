import { observer } from "mobx-react-lite";

import Show from "components/bookmarks/Show";
import Video from "services/models/video";

type Props = {
  video: Video;
};

const SessionList = observer(({ video }: Props) => {
  const renderedBookmarks = video.sortedBookmarks.map((bookmark) => (
    <Show key={bookmark.id} bookmark={bookmark} />
  ));

  if (renderedBookmarks.length === 0) {
    return <em>No bookmarks created yet</em>;
  }

  return <>{renderedBookmarks}</>;
});

export default SessionList;
