import { UnknownFileSource, MissingLocalFileHandle } from "./errors";
import {
  addFromBlob,
  addFromFileHandle,
  remove as opfsRemove,
} from "services/opfs";
import type { Storable } from "./models/types";
import fileHandles from "services/file_handles";

import type { StartEvent, ProgressEvent, CompleteEvent } from "services/opfs";

type callbacks = {
  onStart: (event: StartEvent) => void;
  onProgress: (event: ProgressEvent) => void;
  onComplete: (event: CompleteEvent) => void;
};

/**
 * Stores the file handle in the file handle database linked to the storable.
 *
 * @param storable The storable that's being saved
 * @param fileHandle File handle returned from the OPFS
 */
const addToFileHandlesTable = async (
  storable: Storable,
  fileHandle: FileSystemFileHandle
) => {
  await fileHandles.table(storable.fileHandlesTable).put({
    id: storable.id,
    fileHandle: fileHandle,
  });
};

export const store = async (
  storable: Storable,
  callbacks?: callbacks
): Promise<Storable> => {
  return new Promise(async (resolve, reject) => {
    if (storable.fileSource instanceof Blob) {
      return addFromBlob(storable.filePath, storable.fileSource, {
        onStart: (event) => {
          if (callbacks && callbacks.onStart !== undefined) {
            callbacks.onStart(event);
          }
        },
        onComplete: async (event) => {
          addToFileHandlesTable(storable, event.fileHandle);
          if (callbacks && callbacks.onComplete !== undefined) {
            callbacks.onComplete(event);
          }
          resolve(storable);
        },
      });
    }

    if (storable.fileSource instanceof FileSystemFileHandle) {
      const readPermission = await storable.fileSource.queryPermission({
        mode: "read",
      });

      // Determine if we can read the file handle
      if (readPermission !== "granted") {
        throw new MissingLocalFileHandle(
          "Attempting to copy file but it does not have permission granted"
        );
      }

      return addFromFileHandle(storable.filePath, storable.fileSource, {
        onStart: (event) => {
          if (callbacks && callbacks.onStart !== undefined) {
            callbacks.onStart(event);
          }
        },
        onProgress: (event) => {
          if (callbacks && callbacks.onProgress !== undefined) {
            callbacks.onProgress(event);
          }
        },
        onComplete: async (event) => {
          addToFileHandlesTable(storable, event.fileHandle);
          if (callbacks && callbacks.onComplete !== undefined) {
            callbacks.onComplete(event);
          }
          resolve(storable);
        },
      });
    }

    throw new UnknownFileSource();
  });
};

export const remove = async (storable: Storable): Promise<Storable> => {
  return new Promise((resolve, reject) => {
    opfsRemove(storable.filePath, {
      onComplete: async () => {
        await fileHandles.table(storable.fileHandlesTable).delete(storable.id);
        resolve(storable);
      },
    });
  });
};
