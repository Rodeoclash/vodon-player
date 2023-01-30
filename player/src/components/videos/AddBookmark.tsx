import { observer } from "mobx-react-lite";
import Video from "services/models/video";
import { secondsToHms } from "services/time";
import Bookmark from "services/models/bookmark";

type Props = {
  video: Video;
};

const AddBookmark = observer(({ video }: Props) => {
  const handleClick = () => {
    const bookmark = new Bookmark({
      videoTimestamp: video.currentTime,
    });
    video.addBookmark(bookmark);
  };

  return (
    <button
      className="btn btn-primary block w-full"
      onClick={() => handleClick()}
    >
      Add bookmark at {secondsToHms(video.currentTime)}
    </button>
  );
});

export default AddBookmark;
