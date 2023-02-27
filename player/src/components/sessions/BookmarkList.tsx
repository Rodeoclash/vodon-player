import { observer } from "mobx-react-lite";

import Show from "components/bookmarks/Show";
import Edit from "components/bookmarks/Edit";
import Container from "components/bookmarks/Container";
import Session from "services/models/session";

type Props = {
  session: Session;
};

const BookmarkList = observer(({ session }: Props) => {
  const renderedBookmarks = session.sortedBookmarks.map((bookmark) => {
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
