if ("storage" in navigator === false) {
  throw new "Vodon player required the OPFS file system to be available"();
}

// Size of the chunks when copying the files into the OPFS
const chunkSize = 1024 * 1024 * 16; // 16MB Chunk size

// Store a reference to the overall root directory on loading
let rootDirectory;

navigator.storage.getDirectory().then((fetchedRootDirectory) => {
  rootDirectory = fetchedRootDirectory;
});

/**
 * Handles copying a file into the local OPFS storage
 */
const handleCopyFile = async ({ data }) => {
  // Get a reference to the file that's being copied
  const originFile = await data.fileHandle.getFile();

  // Create a directory under the session id for the file to be copied to
  const parentDirectory = await rootDirectory.getDirectoryHandle(
    data.folderName,
    { create: true }
  );

  // Get a handle to the destination of where the file will be copied to
  const destinationFileHandle = await parentDirectory.getFileHandle(
    data.fileName,
    { create: true }
  );

  // Create a writable stream for the destination file
  const destinationWritableStream =
    await destinationFileHandle.createWritable();

  // Total number of chunks we're going to copy the file using
  const totalChunks = Math.ceil(originFile.size / chunkSize, chunkSize);

  postMessage({
    kind: "COPY_FILE_START",
    meta: data.meta,
  });

  // Loop over the chunks, writing out the file. This avoids loading the entire
  // file into memory at once
  let currentChunk = 1;

  while (currentChunk <= totalChunks) {
    const offset = (currentChunk - 1) * chunkSize;
    const currentFilePart = originFile.slice(offset, offset + chunkSize);
    await destinationWritableStream.write(currentFilePart, {
      at: currentChunk - 1,
    });
    // TODO - Mark % of file completed

    postMessage({
      kind: "COPY_FILE_PROGRESS",
      progress: currentChunk / totalChunks,
      meta: data.meta,
    });

    currentChunk++;
  }

  // Mark the destination file as being closed
  await destinationWritableStream.close();

  // Send a message back to the client that the copy has completed
  postMessage({
    kind: "COPY_FILE_COMPLETE",
    fileHandle: destinationFileHandle,
    meta: data.meta,
  });
};

/**
 * Handles removing a file from the local OPFS storage
 */
const handleRemoveFile = async ({ data }) => {
  // Create a directory under the session id for the file to be copied to
  const parentDirectory = await rootDirectory.getDirectoryHandle(
    data.folderName
  );

  postMessage({
    kind: "REMOVE_FILE_START",
    meta: data.meta,
  });

  await parentDirectory.removeEntry(data.fileName);

  postMessage({
    kind: "REMOVE_FILE_COMPLETE",
    meta: data.meta,
  });
};

/**
 * Handles messages being sent from the client
 */
onmessage = async (event) => {
  switch (event.data.kind) {
    case "COPY_FILE":
      handleCopyFile(event);
      break;
    case "REMOVE_FILE":
      handleRemoveFile(event);
      break;
    default:
      throw new Error(`Unknown message type in worker: ${event.data.kind}`);
  }
};
