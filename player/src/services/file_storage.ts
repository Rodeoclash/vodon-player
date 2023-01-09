/**
 * Handles storing files locally on the machine.
 */

import { UnknownWorkerMessage } from "services/errors";

export const FILE_STORAGE_MESSAGES = {
  COPY_FILE: "COPY_FILE",
};

enum SendMessageKinds {
  COPY_FILE = "COPY_FILE",
}

enum RecieveMessageKinds {
  COPY_FILE_PROGRESS = "COPY_FILE_PROGRESS",
  COPY_FILE_COMPLETE = "COPY_FILE_COMPLETE",
}

type CopyFileProgressEvent = {
  kind: RecieveMessageKinds.COPY_FILE_PROGRESS;
};

type CopyFileCompleteEvent = {
  kind: RecieveMessageKinds.COPY_FILE_COMPLETE;
};

export const worker = new Worker(
  new URL("../workers/file_storage.js", import.meta.url),
  {
    type: "module",
  }
);

/**
 * Handles events sent from the worker
 * @param event
 */
worker.onmessage = (
  event: MessageEvent<CopyFileProgressEvent | CopyFileCompleteEvent>
) => {
  switch (event.data.kind) {
    case RecieveMessageKinds.COPY_FILE_PROGRESS:
      console.log("=== heard copy file progress");
      console.log(event);
      break;
    case RecieveMessageKinds.COPY_FILE_COMPLETE:
      console.log("=== heard copy file complete");
      console.log(event);
      break;
  }
};

/**
 * Send a file into the storage system
 * @param fileHandle
 * @param folderId
 * @param id
 */
export function CopyFileToStorage(
  fileHandle: FileSystemFileHandle,
  folderId: string,
  id: string
): void {
  worker.postMessage({
    kind: SendMessageKinds.COPY_FILE,
    fileHandle,
    id,
    folderId,
  });
}
