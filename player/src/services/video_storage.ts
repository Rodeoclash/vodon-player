/**
 * Handles storing the video files in the OPFS file system via a web worker.
 */

import root from "services/models/root";
import Video from "services/models/video";
import { RecordNotFound } from "services/errors";
import database from "services/database";

enum SendMessageKinds {
  COPY_FILE = "COPY_FILE",
}

enum RecieveMessageKinds {
  COPY_FILE_START = "COPY_FILE_START",
  COPY_FILE_PROGRESS = "COPY_FILE_PROGRESS",
  COPY_FILE_COMPLETE = "COPY_FILE_COMPLETE",
}

type CopyVideoMeta = {
  session_id: string;
  video_id: string;
};

type CopyFileStartEvent = {
  kind: RecieveMessageKinds.COPY_FILE_START;
  meta: CopyVideoMeta;
};

type CopyFileProgressEvent = {
  kind: RecieveMessageKinds.COPY_FILE_PROGRESS;
  progress: number;
  meta: CopyVideoMeta;
};

type CopyFileCompleteEvent = {
  kind: RecieveMessageKinds.COPY_FILE_COMPLETE;
  fileHandle: FileSystemFileHandle;
  meta: CopyVideoMeta;
};

export const worker = new Worker(
  new URL("../workers/file_storage.js", import.meta.url),
  {
    type: "module",
  }
);

/**
 * Handles events sent from the worker
 *
 * TODO: This is hardcoded to expect copying videos, we might want to adjust it
 * if we're planning to copy other things locally...
 *
 * @param event
 */
worker.onmessage = async ({
  data,
}: MessageEvent<
  CopyFileStartEvent | CopyFileProgressEvent | CopyFileCompleteEvent
>) => {
  const session = root.getSessionById(data.meta.session_id);

  if (session == undefined) {
    throw new RecordNotFound();
  }

  const video = session.getVideoById(data.meta.video_id);

  if (video == undefined) {
    throw new RecordNotFound();
  }

  switch (data.kind) {
    case RecieveMessageKinds.COPY_FILE_START:
      video.setCopyToStorageInProgress(true);
      video.setCopyToStorageProgress(0);
      break;
    case RecieveMessageKinds.COPY_FILE_PROGRESS:
      video.setCopyToStorageProgress(data.progress);
      break;
    case RecieveMessageKinds.COPY_FILE_COMPLETE:
      video.setCopyToStorageInProgress(false);

      // Track our new OPFS file handle in the database
      await database.table("storageVideoFileHandles").put({
        id: video.id,
        fileHandle: data.fileHandle,
      });

      break;
  }
};

/**
 * Send a file into the storage system
 * @param fileHandle
 * @param folderId
 * @param id
 */
export function CopyToStorage(
  fileHandle: FileSystemFileHandle,
  video: Video
): void {
  const session = video.getSession();

  worker.postMessage({
    fileHandle,
    folderName: session.id,
    fileName: video.id,
    kind: SendMessageKinds.COPY_FILE,
    meta: {
      video_id: video.id,
      session_id: session.id,
    },
  });
}
