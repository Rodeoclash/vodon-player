import { observer } from "mobx-react-lite";
import { secondsToHms } from "services/time";
import useVideoControls from "services/hooks/useVideoControls";
import bus from "services/bus";
import Bookmark from "services/models/bookmark";

import Pagination from "./Pagination";
import AddPage from "./AddPage";

type Props = {
  bookmark: Bookmark;
};

const Header = observer(({ bookmark }: Props) => {
  /**
   * Goto the selected time. We don't need to set the active video here because
   * we'll automatically switch to the active bookmark when arriving at this
   * time.
   */
  const handleClickTimecode = () => {
    const bookmarkPage = bookmark.bookmarkPages[0];

    if (
      bookmark.editingInProgress === true ||
      bookmarkPage.video.reviewVideoEl === null
    ) {
      return;
    }

    // The time we're going to be going to
    const newTime = bookmarkPage.videoTimestamp;

    // Set the video attached to the bookmark page to be active in the display
    bookmark.session.selectVideo(bookmarkPage.video);

    // Set the time of the video to match what's stored on the page
    bookmarkPage.video.reviewVideoEl.currentTime = newTime;

    // Ensure follower videos are at the correct time
    bus.emit("video.gotoTime", bookmarkPage.video, newTime);

    bookmark.selectBookmarkPage(bookmarkPage);
  };

  return (
    <header className="flex items-stretch border-b border-stone-700 h-10">
      <div
        className="flex-shrink text-sm cursor-pointer flex items-center px-4 border-r border-stone-700"
        onClick={() => handleClickTimecode()}
      >
        {secondsToHms(bookmark.timestamp)}
      </div>
      <div className="flex-shrink flex items-center text-sm px-4">
        <strong>{bookmark.selectedBookmarkPage.video.name}</strong>
      </div>
      {bookmark.active === true && (
        <>
          <ol className="flex-grow flex items-stretch justify-end">
            <Pagination bookmark={bookmark} />
          </ol>
          <AddPage bookmark={bookmark} />
        </>
      )}
    </header>
  );
});

export default Header;
