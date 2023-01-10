import * as React from "react";
import { useLiveQuery } from "dexie-react-hooks";
import Video from "services/models/video";
import database from "services/database";

import type VideoFileHandle from "services/database";

type Props = {
  video: Video;
};

const VideoPlayer = ({ video }: Props) => {
  const storageFileHandle = useLiveQuery(() =>
    database.table("storageVideoFileHandles").get({
      id: video.id,
    })
  );

  const [videoUrl, setVideoUrl] = React.useState<string | null>(null);

  React.useEffect(() => {
    (async () => {
      if (storageFileHandle === undefined) {
        return;
      }

      const file = await storageFileHandle.fileHandle.getFile();
      const url = URL.createObjectURL(file);

      setVideoUrl(url);
    })();
  }, [storageFileHandle]);

  if (video.storageFileHandleExists === false) {
    return <p>No storage handle</p>;
  }

  if (videoUrl === null) {
    return <p>No video url</p>;
  }

  return <video src={videoUrl} width="800" height="600" controls={true} />;
};

export default VideoPlayer;
