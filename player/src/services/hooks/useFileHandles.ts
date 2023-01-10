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
        setLocalFileHandle(localFileHandleRecord.fileHandle);
        setLocalFileHandlePermission(
          await localFileHandleRecord.fileHandle.queryPermission({
            mode: "read",
          })
        );
      }

      if (storageFileHandleRecord === undefined) {
        setStorageFileHandle(null);
      } else {
        setStorageFileHandle(storageFileHandleRecord.fileHandle);
      }
    })();
  }, [localFileHandleRecord, storageFileHandleRecord]);

  return [
    localFileHandle,
    localFileHandlePermission,
    storageFileHandle,
  ] as const;
};

export default useFileHandles;
