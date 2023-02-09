import { observer } from "mobx-react-lite";
import Video from "services/models/video";
import { secondsToHms } from "services/time";
import Bookmark from "services/models/bookmark";
import { bookmarkPageRef } from "services/models/references";
import { createBookmarkPage } from "services/bookmark_pages";

type Props = {
  video: Video;
};

const AddBookmark = observer(({ video }: Props) => {
  const handleClick = () => {
    const bookmarkPage = createBookmarkPage();

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
