import * as React from "react";
import { observer } from "mobx-react-lite";
import Video from "services/models/video";
import { secondsToHms } from "services/time";
import { create } from "services/bookmarks";

type Props = {
  video: Video;
};

const AddBookmark = observer(({ video }: Props) => {
  const [busy, setBusy] = React.useState<boolean>(false);

  const handleClick = async () => {
    if (busy === true) {
      return;
    }

    setBusy(true);
    await create(video);
    setBusy(false);
  };

  if (video.session.bookmarkPresent === true) {
    return (
      <button
        className="btn btn-primary btn-disabled block w-full cursor-not-allowed"
        disabled={true}
      >
        Bookmark exists at {secondsToHms(video.currentTimeInSession)}
      </button>
    );
  }

  return (
    <button
      className="btn btn-primary block w-full"
      onClick={() => handleClick()}
      disabled={busy}
    >
      Add bookmark at {secondsToHms(video.currentTimeInSession)}
    </button>
  );
});

export default AddBookmark;
