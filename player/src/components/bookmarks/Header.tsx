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

  return (
    <header className="flex items-stretch border-b border-stone-700">
      <div
        className="flex-shrink text-sm cursor-pointer flex items-center px-4 border-r border-stone-700"
        onClick={() => handleClick()}
      >
        {secondsToHms(bookmark.videoTimestamp)}
      </div>
      <ol className="flex-grow p-2 flex items-stretch justify-end">
        <li className="px-2">
          <a href="#">1</a>
        </li>
        <li className="px-2">
          <a href="#">2</a>
        </li>
        <li className="px-2">
          <a href="#">3</a>
        </li>
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
