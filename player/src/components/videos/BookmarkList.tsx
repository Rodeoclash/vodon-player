import { observer } from "mobx-react-lite";

import Show from "components/bookmarks/Show";
import Edit from "components/bookmarks/Edit";
import Container from "components/bookmarks/Container";
import Video from "services/models/video";

type Props = {
  video: Video;
};

const BookmarkList = observer(({ video }: Props) => {
  const renderedBookmarks = video.sortedBookmarks.map((bookmark) => {
    if (bookmark.editingInProgress === true) {
      return (
        <Container key={bookmark.id} bookmark={bookmark}>
          <Edit bookmark={bookmark} />
        </Container>
      );
    } else {
      return (
        <Container key={bookmark.id} bookmark={bookmark}>
          <Show bookmark={bookmark} />
        </Container>
      );
    }
  });

  if (renderedBookmarks.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center p-4 text-center">
        <em className="text-white/30">No bookmarks created on this video</em>
      </div>
    );
  }

  return <>{renderedBookmarks}</>;
});

export default BookmarkList;
