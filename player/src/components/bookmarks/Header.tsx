import { observer } from "mobx-react-lite";
import { secondsToHms } from "services/time";
import Bookmark from "services/models/bookmark";

type Props = {
  bookmark: Bookmark;
};

const Header = observer(({ bookmark }: Props) => {
  const handleClick = () => {
    bookmark.session.selectBookmark(bookmark);
  };

  const renderedPages = bookmark.sortedBookmarkPages.map(
    (bookmarkPage, index) => {
      return (
        <li key={bookmarkPage.id} className="flex items-stretch">
          <a
            href="#"
            className="px-4 border-l border-stone-700 flex items-center"
          >
            {index + 1}
          </a>
        </li>
      );
    }
  );

  return (
    <header className="flex items-stretch border-b border-stone-700 h-10">
      <div
        className="flex-shrink text-sm cursor-pointer flex items-center px-4 border-r border-stone-700"
        onClick={() => handleClick()}
      >
        {secondsToHms(bookmark.videoTimestamp)}
      </div>
      <ol className="flex-grow flex items-stretch justify-end">
        {renderedPages}
      </ol>
      <button className="border-l border-stone-700 px-2">
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
