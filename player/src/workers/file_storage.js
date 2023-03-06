if ("storage" in navigator === false) {
  throw new "Vodon player required the OPFS file system to be available"();
}

// Size of the chunks when copying the files into the OPFS
const chunkSize = 1024 * 1024 * 128; // 128MB Chunk size

// Store a reference to the overall root directory on loading
let rootDirectory;

navigator.storage.getDirectory().then((fetchedRootDirectory) => {
  rootDirectory = fetchedRootDirectory;
});

/**
 * Takes a path string and recursively creates the folders for it.
 * @param {string} location Path of where we're going to create the folders
 */
const createDestinationFolders = async (location) => {
  const folderNames = location.split("/");
  let acc = [];

  // Loop over all the parts of the path that aren't the filename
  for (const [index, folderName] of folderNames
    .slice(0, folderNames.length - 1)
    .entries()) {
    // When we haven't created any of the path yet
    if (acc.length === 0) {
      // Create a directory under the root
      const folderHandle = await rootDirectory.getDirectoryHandle(folderName, {
        create: true,
      });

      // Push as the first value of acc
      acc.push(folderHandle);
    } else {
      // Get the parent directory (i.e. the last directory created)
      const parentDirectory = acc[index - 1];

      // Create a directory under the parent
      const folderHandle = await parentDirectory.getDirectoryHandle(
        folderName,
        {
          create: true,
        }
      );

      acc.push(folderHandle);
    }
  }

  return acc;
};

/**
 * Takes a path string and ensures we can write a file at the end of it.
 * @param {string} location Path of where we're going to create the file
 * @returns
 */
const createDestinationFileHandle = async (location) => {
  const parts = location.split("/");
  const fileName = parts[parts.length - 1];

  const destinationFolders = await createDestinationFolders(location);

  return await destinationFolders[destinationFolders.length - 1].getFileHandle(
    fileName,
    { create: true }
  );
};

const handleAddFromBlob = async ({ data }) => {
  postMessage({
    kind: "ADD_FROM_BLOB_START",
    meta: data.meta,
    event: {
      progress: 0,
    },
  });

  // Get a handle to the destination of where the file will be copied to
  const destinationFileHandle = await createDestinationFileHandle(
    data.location
  );

  // Create a writable stream for the destination file
  const destinationWritableStream =
    await destinationFileHandle.createWritable();

  // Write out the blob data
  await destinationWritableStream.write(data.blob);

  // Mark the destination file as being closed
  await destinationWritableStream.close();

  // Send a message back to the client that the copy has completed
  postMessage({
    kind: "ADD_FROM_BLOB_COMPLETE",
    meta: data.meta,
    event: {
      progress: 1,
      fileHandle: destinationFileHandle,
    },
  });
};

const handleAddFromFileHandle = async ({ data }) => {
  postMessage({
    kind: "ADD_FROM_FILE_HANDLE_START",
    meta: data.meta,
    event: {
      progress: 0,
    },
  });

  // Get a handle to the destination of where the file will be copied to
  const destinationFileHandle = await createDestinationFileHandle(
    data.location
  );

  // Get a reference to the file that's being copied
  const originFile = await data.fileHandle.getFile();

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
      kind: "ADD_FROM_FILE_HANDLE_PROGRESS",
      meta: data.meta,
      fileHandle: destinationFileHandle,
      event: {
        progress: currentChunk / totalChunks,
      },
    });

    currentChunk++;
  }

  // Mark the destination file as being closed
  await destinationWritableStream.close();

  // Send a message back to the client that the copy has completed
  postMessage({
    kind: "ADD_FROM_FILE_HANDLE_COMPLETE",
    meta: data.meta,
    event: {
      progress: 1,
      fileHandle: destinationFileHandle,
    },
  });
};

/**
 * Handles removing a file from the local OPFS storage
 */
const handleRemoveFile = async ({ data }) => {
  // Create a directory under the session id for the file to be copied to
  const parentDirectory = await rootDirectory.getDirectoryHandle(
    data.location.folderName
  );

  postMessage({
    kind: "REMOVE_FILE_START",
    meta: data.meta,
  });

  await parentDirectory.removeEntry(data.location.fileName);

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
    case "ADD_FROM_FILE_HANDLE":
      handleAddFromFileHandle(event);
      break;
    case "ADD_FROM_BLOB":
      handleAddFromBlob(event);
      break;
    case "REMOVE_FILE":
      handleRemoveFile(event);
      break;
    default:
      throw new Error(`Unknown message type in worker: ${event.data.kind}`);
  }
};
