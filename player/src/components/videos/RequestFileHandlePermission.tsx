import React from "react";
import Video from "services/models/video";
import { requestLocalFileHandlePermission } from "services/videos";
import database from "services/database";
import { storeFile } from "services/videos";
import { useLiveQuery } from "dexie-react-hooks";

type Props = {
  video: Video;
};

export default function RequestFileHandlePermission({ video }: Props) {
  const [permission, setPermission] = React.useState<PermissionState | null>(
    null
  );

  const localFileHandle = useLiveQuery(() =>
    database.table("localVideoFileHandles").get({
      id: video.id,
    })
  );

  const handleClick = React.useCallback(async () => {
    await requestLocalFileHandlePermission(video);
    await storeFile(video);
  }, [video]);

  React.useEffect(() => {
    (async () => {
      if (localFileHandle === undefined) {
        return;
      }

      setPermission(
        await localFileHandle.fileHandle.queryPermission({ mode: "read" })
      );
    })();
  }, [localFileHandle]);

  if (permission === "granted") {
    return null;
  }

  return (
    <button className="button" onClick={() => handleClick()}>
      Request permission
    </button>
  );
}
