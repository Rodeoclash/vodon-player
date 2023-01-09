// Size of the chunks when copying the files into the OPFS
const chunkSize = 1024 * 1024 * 16; // 16MB Chunk size

// Store a reference to the overall root directory on loading
let rootDirectory;

navigator.storage.getDirectory().then((fetchedRootDirectory) => {
  rootDirectory = fetchedRootDirectory;
});

const handleCopyFile = async (event) => {
  // Get a reference to the file that's being copied
  const originFile = await event.data.fileHandle.getFile();

  // Create a directory under the session id for the file to be copied to
  const parentDirectory = await rootDirectory.getDirectoryHandle(
    event.data.folderId,
    { create: true }
  );

  // Get a handle to the destination of where the file will be copied to
  const destinationFileHandle = await parentDirectory.getFileHandle(
    event.data.sessionId,
    { create: true }
  );

  // Create a writable stream for the destination file
  const destinationWritableStream =
    await destinationFileHandle.createWritable();

  // Total number of chunks we're going to copy the file using
  const totalChunks = Math.ceil(originFile.size / chunkSize, chunkSize);

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
    });

    currentChunk++;
  }

  // Mark the destination file as being closed
  await destinationWritableStream.close();

  // TODO - Send message to client that file has been copied
  postMessage({
    kind: "COPY_FILE_COMPLETE",
    fileHandle: destinationFileHandle,
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
    default:
      throw new Error(`Unknown message type in worker: ${event.data.kind}`);
  }
};
