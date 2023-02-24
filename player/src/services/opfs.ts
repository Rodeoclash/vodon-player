/**
 * A module for interacting easily with the OPFS. Attempts to abstract away the
 * message passing between the main thread and the worker by replacing it with
 * a callback type system.
 */

import { v4 as uuidv4 } from "uuid";
import { UnknownMessage } from "services/errors";

enum SendMessageKinds {
  ADD_FILE = "ADD_FILE",
  REMOVE_FILE = "REMOVE_FILE",
}

enum RecieveMessageKinds {
  // Adding files
  ADD_FILE_START = "ADD_FILE_START",
  ADD_FILE_PROGRESS = "ADD_FILE_PROGRESS",
  ADD_FILE_COMPLETE = "ADD_FILE_COMPLETE",

  // Removing files
  REMOVE_FILE_START = "REMOVE_FILE_START",
  REMOVE_FILE_COMPLETE = "REMOVE_FILE_COMPLETE",
}

type AddStartEvent = {
  progress: 0;
};

type AddProgressEvent = {
  progress: number;
};

type AddCompleteEvent = {
  progress: 1;
  fileHandle: FileSystemFileHandle;
};

type AddOperationOptions = {
  onStart?: (event: AddStartEvent) => void;
  onProgress?: (event: AddProgressEvent) => void;
  onComplete?: (event: AddCompleteEvent) => void;
};

type RemoveOperationOptions = {
  onStart?: (event: AddStartEvent) => void;
  onComplete?: (event: AddCompleteEvent) => void;
};

const worker = new Worker(
  new URL("../workers/file_storage.js", import.meta.url),
  {
    type: "module",
  }
);

const addOperations: { [key: string]: AddOperationOptions } = {};
const removeOperations: { [key: string]: RemoveOperationOptions } = {};

/**
 * Guarded operations callback handler. Will invoke callbacks if they are
 * present.
 *
 * @param operations Map of stored operations to callback to.
 * @param id Id if the operation in progress
 * @param method The kind of the callback
 * @param payload The payload to pass.
 */
const handleOperation = (
  operations: any,
  id: string,
  method: string,
  payload: Object
) => {
  if (operations[id] === undefined || operations[id][method] === undefined) {
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
  const operation = addOperations[data.meta.id];

  switch (data.kind) {
    case RecieveMessageKinds.ADD_FILE_START:
      handleOperation(addOperations, data.meta.id, "onStart", data.event);
      break;
    case RecieveMessageKinds.ADD_FILE_PROGRESS:
      handleOperation(addOperations, data.meta.id, "onProgress", data.event);
      break;
    case RecieveMessageKinds.ADD_FILE_COMPLETE:
      handleOperation(addOperations, data.meta.id, "onComplete", data.event);
      delete addOperations[data.meta.id];
      break;
    case RecieveMessageKinds.REMOVE_FILE_START:
      handleOperation(removeOperations, data.meta.id, "onStart", data.event);
      break;
    case RecieveMessageKinds.REMOVE_FILE_COMPLETE:
      handleOperation(removeOperations, data.meta.id, "onComplete", data.event);
      delete removeOperations[data.meta.id];
      break;
    default:
      throw new UnknownMessage(
        `Unknown message type received from OPFS worker: ${data.kind}`
      );
  }
};

export function add(
  folderName: string,
  fileName: string,
  fileHandle: FileSystemFileHandle,
  options: AddOperationOptions
) {
  const id = uuidv4();

  addOperations[id] = options;

  worker.postMessage({
    kind: SendMessageKinds.ADD_FILE,
    fileHandle,
    location: {
      folderName,
      fileName,
    },
    meta: {
      id,
    },
  });
}

export function remove(
  folderName: string,
  fileName: string,
  options: AddOperationOptions
) {
  const id = uuidv4();

  removeOperations[id] = options;

  worker.postMessage({
    kind: SendMessageKinds.REMOVE_FILE,
    location: {
      folderName,
      fileName,
    },
    meta: {
      id,
    },
  });
}
