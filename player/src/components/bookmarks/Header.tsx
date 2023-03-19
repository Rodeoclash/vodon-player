import { observer } from "mobx-react-lite";
import { secondsToHms } from "services/time";
import Bookmark from "services/models/bookmark";
import { activate } from "services/bookmark_pages";

import Pagination from "./Pagination";
import AddPage from "./AddPage";
import Tooltip from "components/ui/Tooltip";

type Props = {
  bookmark: Bookmark;
};

const Header = observer(({ bookmark }: Props) => {
  const rootBookmarkPage = bookmark.bookmarkPages[0];
  const videoNotReady =
    rootBookmarkPage.video.localFileHandlePermission === "prompt";

  /**
   * Goto the selected time. We don't need to set the active video here because
   * we'll automatically switch to the active bookmark when arriving at this
   * time.
   */
  const handleClickTimecode = () => {
    if (videoNotReady === true) {
      return;
    }

    activate(rootBookmarkPage, true);
  };

  const timecodeNotReady = (
    <div className="flex-shrink text-sm cursor-pointer flex items-center px-4 border-r border-stone-700 select-none">
      <Tooltip
        content={
          "Cannot go to bookmark as the video is not ready. Please restore it"
        }
      >
        {secondsToHms(bookmark.timestamp)}
      </Tooltip>
    </div>
  );

  const timecodeReady = (
    <div
      className="flex-shrink text-sm cursor-pointer flex items-center px-4 border-r border-stone-700 select-none"
      onClick={() => handleClickTimecode()}
    >
      {secondsToHms(bookmark.timestamp)}
    </div>
  );

  return (
    <header className="flex items-stretch border-b border-stone-700 h-10">
      {videoNotReady === true ? timecodeNotReady : timecodeReady}
      <div className="flex-shrink flex items-center text-sm px-4 truncate">
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
