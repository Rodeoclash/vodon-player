import { observer } from "mobx-react-lite";
import { secondsToHms } from "services/time";
import Bookmark from "services/models/bookmark";
import { activate } from "services/bookmark_pages";

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
    activate(bookmarkPage, true);
  };

  return (
    <header className="flex items-stretch border-b border-stone-700 h-10">
      <div
        className="flex-shrink text-sm cursor-pointer flex items-center px-4 border-r border-stone-700"
        onClick={() => handleClickTimecode()}
      >
        {secondsToHms(bookmark.timestamp)}
      </div>
      <div className="flex-shrink flex items-center text-sm px-4 truncate font-bold">
        {bookmark.selectedBookmarkPage.video.name}
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
