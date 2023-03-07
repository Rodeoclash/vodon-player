import { observer } from "mobx-react-lite";
import Video from "services/models/video";
import { secondsToHms } from "services/time";
import Bookmark from "services/models/bookmark";
import { bookmarkPageRef } from "services/models/references";
import { create } from "services/bookmark_pages";
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

    const bookmarkPage = create(video);

    const bookmark = new Bookmark({
      bookmarkPages: [bookmarkPage],
      selectedBookmarkPageRef: bookmarkPageRef(bookmarkPage),
      editingInProgress: true,
      active: true,
    });

    session.addBookmark(bookmark);
    session.addToSeenBookmarkIds(bookmark);
  };

  if (video.session.bookmarkPresent === true) {
    return (
      <button className="btn btn-primary btn-disabled block w-full cursor-not-allowed">
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
