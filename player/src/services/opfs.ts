/**
 * A module for interacting easily with the OPFS. Attempts to abstract away the
 * message passing between the main thread and the worker by replacing it with
 * a callback type system.
 */

import { v4 as uuidv4 } from "uuid";
import { UnknownMessage } from "services/errors";
import consola from "consola";

enum SendMessageKinds {
  ADD_FROM_FILE_HANDLE = "ADD_FROM_FILE_HANDLE",
  ADD_FROM_BLOB = "ADD_FROM_BLOB",
  REMOVE_FILE = "REMOVE_FILE",
}

enum RecieveMessageKinds {
  // Adding files from file handle
  ADD_FROM_FILE_HANDLE_START = "ADD_FROM_FILE_HANDLE_START",
  ADD_FROM_FILE_HANDLE_PROGRESS = "ADD_FROM_FILE_HANDLE_PROGRESS",
  ADD_FROM_FILE_HANDLE_COMPLETE = "ADD_FROM_FILE_HANDLE_COMPLETE",

  // Adding files from blob
  ADD_FROM_BLOB_START = "ADD_FROM_BLOB_START",
  ADD_FROM_BLOB_COMPLETE = "ADD_FROM_BLOB_COMPLETE",

  // Removing files
  REMOVE_FILE_START = "REMOVE_FILE_START",
  REMOVE_FILE_COMPLETE = "REMOVE_FILE_COMPLETE",
}

// These add events are shared between all operations (adding file handles
// and blobs)
export type StartEvent = {
  progress: 0;
};

export type ProgressEvent = {
  progress: number;
};

export type CompleteEvent = {
  progress: 1;
  fileHandle: FileSystemFileHandle;
};

export type AddFromFileHandleOperationOptions = {
  onStart?: (event: StartEvent) => void;
  onProgress?: (event: ProgressEvent) => void;
  onComplete?: (event: CompleteEvent) => void;
};

export type AddFromBlobOperationOptions = {
  onStart?: (event: StartEvent) => void;
  onComplete?: (event: CompleteEvent) => void;
};

export type RemoveOperationOptions = {
  onStart?: (event: StartEvent) => void;
  onComplete?: (event: CompleteEvent) => void;
};

const worker = new Worker(
  new URL("../workers/file_storage.js", import.meta.url),
  {
    type: "module",
  }
);

const addOperations: {
  [key: string]:
    | AddFromFileHandleOperationOptions
    | AddFromBlobOperationOptions;
} = {};
const removeOperations: { [key: string]: RemoveOperationOptions } = {};

const setOperationCallback = (operations: any, id: string, callback: any) => {
  consola.info(`Setting OPFS callback: ${id}`);
  operations[id] = callback;
};

/**
 * Guarded operations callback handler. Will invoke callbacks if they are
 * present.
 *
 * @param operations Map of stored operations to callback to.
 * @param id Id if the operation in progress
 * @param method The kind of the callback
 * @param payload The payload to pass.
 */
const handleOperationCallback = (
  operations: any,
  id: string,
  method: string,
  payload: Object
) => {
  consola.info(`Performing OPFS callback: ${id}`);

  if (operations[id] === undefined || operations[id][method] === undefined) {
    consola.warn(
      `No operation found to activate for: ${method}, all that was found was`,
      operations[id]
    );
    return;
  }

  operations[id][method](payload);
};

/**
 * Handle messages being returned by the worker. This will look up the stored
 * callback and invoke it if it is present.
 * @param param0
 */
worker.onmessage = async ({ data }) => {
  consola.info(`Received file storage worker message: ${data.kind}`);

  switch (data.kind) {
    case RecieveMessageKinds.ADD_FROM_FILE_HANDLE_START:
      handleOperationCallback(
        addOperations,
        data.meta.id,
        "onStart",
        data.event
      );
      break;
    case RecieveMessageKinds.ADD_FROM_FILE_HANDLE_PROGRESS:
      handleOperationCallback(
        addOperations,
        data.meta.id,
        "onProgress",
        data.event
      );
      break;
    case RecieveMessageKinds.ADD_FROM_FILE_HANDLE_COMPLETE:
      handleOperationCallback(
        addOperations,
        data.meta.id,
        "onComplete",
        data.event
      );
      delete addOperations[data.meta.id];
      break;
    case RecieveMessageKinds.ADD_FROM_BLOB_START:
      handleOperationCallback(
        addOperations,
        data.meta.id,
        "onStart",
        data.event
      );
      break;
    case RecieveMessageKinds.ADD_FROM_BLOB_COMPLETE:
      handleOperationCallback(
        addOperations,
        data.meta.id,
        "onComplete",
        data.event
      );
      break;
    case RecieveMessageKinds.REMOVE_FILE_START:
      handleOperationCallback(
        removeOperations,
        data.meta.id,
        "onStart",
        data.event
      );
      break;
    case RecieveMessageKinds.REMOVE_FILE_COMPLETE:
      handleOperationCallback(
        removeOperations,
        data.meta.id,
        "onComplete",
        data.event
      );
      delete removeOperations[data.meta.id];
      break;
    default:
      throw new UnknownMessage(
        `Unknown message type received from OPFS worker: ${data.kind}`
      );
  }
};

/**
 * Adds a file to the storage system from a blob source (used for screenshots
 * of videos).
 */
export function addFromBlob(
  location: string,
  blob: Blob,
  options: AddFromBlobOperationOptions
) {
  consola.info(`Storing file from blob to: ${location}`);

  const id = uuidv4();

  setOperationCallback(addOperations, id, options);

  worker.postMessage({
    kind: SendMessageKinds.ADD_FROM_BLOB,
    blob,
    location,
    meta: {
      id,
    },
  });
}

/**
 * Adds a file to the storage system from a file handle source.
 */
export function addFromFileHandle(
  location: string,
  fileHandle: FileSystemFileHandle,
  options: AddFromFileHandleOperationOptions
) {
  consola.info(`Storing file from fileHandle to: ${location}`);

  const id = uuidv4();

  setOperationCallback(addOperations, id, options);

  worker.postMessage({
    kind: SendMessageKinds.ADD_FROM_FILE_HANDLE,
    fileHandle,
    location,
    meta: {
      id,
    },
  });
}

/**
 * Removes a file from storage.
 */
export function remove(
  location: string,
  options: AddFromFileHandleOperationOptions
) {
  const id = uuidv4();

  setOperationCallback(removeOperations, id, options);

  worker.postMessage({
    kind: SendMessageKinds.REMOVE_FILE,
    location,
    meta: {
      id,
    },
  });
}

export function safeFileName(name: string) {
  return name.replace(/[^\p{L}\d]/gu, "");
}
