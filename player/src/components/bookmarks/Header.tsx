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
  const [gotoTime, pause, play, setVolume] = useVideoControls(
    bookmark.video.reviewVideoEl
  );

  /**
   * Goto the selected time. We don't need to set the active video here because
   * we'll automatically switch to the active bookmark when arriving at this
   * time.
   */
  const handleClickTimecode = () => {
    gotoTime(bookmark.videoTimestamp);
    bus.emit("video.gotoTime", bookmark.video, bookmark.videoTimestamp);
  };

  return (
    <header className="flex items-stretch border-b border-stone-700 h-10">
      <div
        className="flex-shrink text-sm cursor-pointer flex items-center px-4 border-r border-stone-700"
        onClick={() => handleClickTimecode()}
      >
        {secondsToHms(bookmark.displayTimestamp)}
      </div>
      <div className="flex-shrink flex items-center text-sm px-4">
        <strong>{bookmark.video.name}</strong>
      </div>
      <ol className="flex-grow flex items-stretch justify-end">
        <Pagination bookmark={bookmark} />
      </ol>
      <AddPage bookmark={bookmark} />
    </header>
  );
});

export default Header;
