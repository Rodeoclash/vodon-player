import { observer } from "mobx-react-lite";
import Video from "services/models/video";
import { secondsToHms } from "services/time";
import Bookmark from "services/models/bookmark";
import BookmarkPage from "services/models/bookmark_page";
import { blankDocument } from "services/tiptap";
import { frozen } from "mobx-keystone";
import { bookmarkPageRef } from "services/models/references";

type Props = {
  video: Video;
};

const AddBookmark = observer(({ video }: Props) => {
  const handleClick = () => {
    const bookmarkPage = new BookmarkPage({
      content: frozen(blankDocument),
    });

    const bookmark = new Bookmark({
      bookmarkPages: [bookmarkPage],
      videoTimestamp: video.currentTime,
      selectedBookmarkPageRef: bookmarkPageRef(bookmarkPage),
      editingInProgress: true,
    });

    video.addBookmark(bookmark);
  };

  return (
    <button
      className="btn btn-primary block w-full"
      onClick={() => handleClick()}
    >
      Add bookmark at {secondsToHms(video.currentTime)}
    </button>
  );
});

export default AddBookmark;
