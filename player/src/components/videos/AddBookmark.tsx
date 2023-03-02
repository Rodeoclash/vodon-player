import { observer } from "mobx-react-lite";
import Video from "services/models/video";
import { secondsToHms } from "services/time";
import Bookmark from "services/models/bookmark";
import { bookmarkPageRef } from "services/models/references";
import { createBookmarkPage } from "services/bookmark_pages";
import { SessionInInvalidState } from "services/errors";

type Props = {
  video: Video;
};

const AddBookmark = observer(({ video }: Props) => {
  const handleClick = () => {
    const session = video.session;

    if (session.currentTime === null) {
      throw new SessionInInvalidState(
        "Cannot add bookmark with a session currentTime"
      );
    }

    const bookmarkPage = createBookmarkPage(video);

    const bookmark = new Bookmark({
      bookmarkPages: [bookmarkPage],
      timestamp: session.currentTime,
      selectedBookmarkPageRef: bookmarkPageRef(bookmarkPage),
      editingInProgress: true,
      active: true,
    });

    session.addBookmark(bookmark);
  };

  if (video.session.bookmarkPresent === true) {
    return (
      <button className="btn btn-primary btn-disabled block w-full">
        Bookmark exists at {secondsToHms(video.currentTimeInSession)}
      </button>
    );
  }

  return (
    <button
      className="btn btn-primary block w-full"
      onClick={() => handleClick()}
    >
      Add bookmark at {secondsToHms(video.currentTimeInSession)}
    </button>
  );
});

export default AddBookmark;
