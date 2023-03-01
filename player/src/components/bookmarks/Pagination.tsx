import classNames from "classnames";
import { observer } from "mobx-react-lite";
import bus from "services/bus";
import Bookmark from "services/models/bookmark";
import BookmarkPage from "services/models/bookmark_page";

type Props = {
  bookmark: Bookmark;
};

const Pagination = observer(({ bookmark }: Props) => {
  const handleClickPageNumber = (bookmarkPage: BookmarkPage) => {
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

    const handleSeek = () => {
      if (bookmarkPage.video.reviewVideoEl === null) {
        return;
      }
      bookmarkPage.video.reviewVideoEl.removeEventListener(
        "seeked",
        handleSeek
      );
      setTimeout(() => {
        bookmark.setActive(true);
      }, 25);
    };

    bookmarkPage.video.reviewVideoEl.addEventListener("seeked", handleSeek);

    // Set the time of the video to match what's stored on the page
    bookmarkPage.video.reviewVideoEl.currentTime = newTime;

    // Ensure follower videos are at the correct time
    bus.emit("video.gotoTime", bookmarkPage.video, newTime);

    // Switch the display of the bookmark
    bookmark.selectBookmarkPage(bookmarkPage);
  };

  const renderedPages = bookmark.sortedBookmarkPages.map(
    (bookmarkPage, index) => {
      const classes = classNames({
        "navlink border-l border-stone-700": true,
        ["active"]: bookmarkPage.active === true,
        "cursor-not-allowed": bookmark.editingInProgress === true,
      });

      return (
        <li key={bookmarkPage.id} className="flex items-stretch relative">
          <a
            onClick={() => handleClickPageNumber(bookmarkPage)}
            className={classes}
          >
            {index + 1}
          </a>
        </li>
      );
    }
  );

  return <>{renderedPages}</>;
});

export default Pagination;
