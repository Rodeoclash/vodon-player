import { observer } from "mobx-react-lite";
import { secondsToHms } from "services/time";
import Bookmark from "services/models/bookmark";

type Props = {
  bookmark: Bookmark;
};

const Header = observer(({ bookmark }: Props) => {
  const handleClick = () => {
    console.log("=== selecting", bookmark.id);
    bookmark.session.selectBookmark(bookmark);
  };

  return (
    <header>
      <div className="flex items-center border-b border-r border-stone-700">
        <div
          className="flex-shrink p-2 bg-stone-700 text-sm cursor-pointer"
          onClick={() => handleClick()}
        >
          {secondsToHms(bookmark.videoTimestamp)}
        </div>
      </div>
      <div className="flex items-center border-b border-stone-700">
        <div className="flex-grow p-2">TODO: Page numbers</div>
        <button className="border-l border-stone-700 p-2">
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
      </div>
    </header>
  );
});

export default Header;
