import * as React from "react";
import { useLiveQuery } from "dexie-react-hooks";
import Video from "services/models/video";
import database from "services/database";
import useFileHandles from "services/hooks/useFileHandles";

type Props = {
  video: Video;
};

const VideoPlayer = ({ video }: Props) => {
  const [localFileHandle, localFileHandlePermission, storageFileHandle] =
    useFileHandles(video);
  const [videoUrl, setVideoUrl] = React.useState<string | null>(null);

  React.useEffect(() => {
    (async () => {
      if (storageFileHandle === null) {
        return;
      }

      const file = await storageFileHandle.getFile();
      const url = URL.createObjectURL(file);

      setVideoUrl(url);
    })();
  }, [storageFileHandle]);

  if (videoUrl === null) {
    return <p>No video url</p>;
  }

  return <video src={videoUrl} width="800" height="600" controls={true} />;
};

export default VideoPlayer;
