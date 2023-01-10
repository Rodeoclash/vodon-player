import * as React from "react";
import { useLiveQuery } from "dexie-react-hooks";
import Video from "services/models/video";
import database from "services/database";

const useFileHandles = (video: Video) => {
  const [localFileHandle, setLocalFileHandle] =
    React.useState<FileSystemFileHandle | null>(null);
  const [localFileHandlePermission, setLocalFileHandlePermission] =
    React.useState<PermissionState | null>(null);
  const [storageFileHandle, setStorageFileHandle] =
    React.useState<FileSystemFileHandle | null>(null);
  const [url, setUrl] = React.useState<string | null>(null);

  const localFileHandleRecord = useLiveQuery(() =>
    database.table("localVideoFileHandles").get({
      id: video.id,
    })
  );

  const storageFileHandleRecord = useLiveQuery(() =>
    database.table("storageVideoFileHandles").get({
      id: video.id,
    })
  );

  React.useEffect(() => {
    (async () => {
      if (localFileHandleRecord === undefined) {
        setLocalFileHandle(null);
      } else {
        const localFileHandle = localFileHandleRecord.fileHandle;
        setLocalFileHandle(localFileHandle);
        setLocalFileHandlePermission(
          await localFileHandleRecord.fileHandle.queryPermission({
            mode: "read",
          })
        );
      }

      if (storageFileHandleRecord === undefined) {
        setStorageFileHandle(null);
      } else {
        const storageFileHandle = storageFileHandleRecord.fileHandle;
        setStorageFileHandle(storageFileHandle);
        const file = await storageFileHandle.getFile();
        setUrl(URL.createObjectURL(file));
      }
    })();
  }, [localFileHandleRecord, storageFileHandleRecord]);

  return {
    localFileHandle,
    localFileHandlePermission,
    storageFileHandle,
    url,
  } as const;
};

export default useFileHandles;
