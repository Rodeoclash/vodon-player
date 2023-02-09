import { observer } from "mobx-react-lite";
import { secondsToHms } from "services/time";
import Bookmark from "services/models/bookmark";
import Pagination from "./Pagination";

type Props = {
  bookmark: Bookmark;
};

const Header = observer(({ bookmark }: Props) => {
  const handleClickTimecode = () => {
    bookmark.session.selectBookmark(bookmark);
  };

  const handleClickAddBookmarkPage = () => {
    bookmark.createBookmarkPage();
  };

  return (
    <header className="flex items-stretch border-b border-stone-700 h-10">
      <div
        className="flex-shrink text-sm cursor-pointer flex items-center px-4 border-r border-stone-700"
        onClick={() => handleClickTimecode()}
      >
        {secondsToHms(bookmark.videoTimestamp)}
      </div>
      <ol className="flex-grow flex items-stretch justify-end">
        <Pagination bookmark={bookmark} />
      </ol>
      <button
        className="border-l border-stone-700 px-2"
        onClick={() => handleClickAddBookmarkPage()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </header>
  );
});

export default Header;
