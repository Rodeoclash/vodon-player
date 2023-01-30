import React from "react";
import { observer } from "mobx-react-lite";

import Video from "services/models/video";

type Props = {
  video: Video;
};

const SessionList = observer(({ video }: Props) => {
  const renderedBookmarks = video.bookmarks.map((bookmark) => (
    <li key={bookmark.id}>{bookmark.id}</li>
  ));

  if (renderedBookmarks.length === 0) {
    return <em>No bookmarks created yet</em>;
  }

  return <>{renderedBookmarks}</>;
});

export default SessionList;
