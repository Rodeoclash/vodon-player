import { observer } from "mobx-react-lite";
import { secondsToHms } from "services/time";
import Bookmark from "services/models/bookmark";
import Pagination from "./Pagination";
import AddPage from "./AddPage";

type Props = {
  bookmark: Bookmark;
};

const Header = observer(({ bookmark }: Props) => {
  const handleClickTimecode = () => {
    bookmark.session.selectBookmark(bookmark);
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
      <AddPage bookmark={bookmark} />
    </header>
  );
});

export default Header;
