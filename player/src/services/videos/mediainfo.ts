import consola from "consola";
import MediaInfoFactory, { MediaInfo, ReadChunkFunc } from "mediainfo.js";
import type { ResultObject } from "mediainfo.js/dist/types";

const mediainfoInstance = (await MediaInfoFactory({
  coverData: false,
  format: "object",
  locateFile: (path, prefix) => {
    return `/${path}`;
  },
})) as MediaInfo;

/**
 * Get media info about a local video file.
 * @param file The file to read data from
 * @returns ResultObject Data about the video file
 */
export const readMediaDataFromFile = async (file: File) => {
  const readChunk: ReadChunkFunc = (chunkSize, offset) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        if (event.target === null || event.target.result === null) {
          throw new Error("Unknown error");
        }

        if (event.target.error) {
          reject(event.target.error);
        }

        // @ts-ignore
        resolve(new Uint8Array(event.target.result));
      };
      reader.readAsArrayBuffer(file.slice(offset, offset + chunkSize));
    });

  return (await mediainfoInstance.analyzeData(
    () => file.size,
    readChunk
  )) as ResultObject;
};

async function* readFromRemote(
  reader: ReadableStreamDefaultReader<Uint8Array>
) {
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    yield value;
  }
}

export const readMediaDataFromURL = async (url: string) => {
  const controller = new AbortController();
  const signal = controller.signal;
  const response = await fetch(url, { signal });
  const size = response.headers.get("content-length");
  const contentType = response.headers.get("content-type");

  if (response.body === null || size === null || contentType === null) {
    throw new Error("Problem fetching file");
  }

  const fileSize = parseInt(size, 10);

  const reader = response.body.getReader();
  const readIterator = readFromRemote(reader);

  let partialFile = new Uint8Array();

  const addRemoteChunk = async () => {
    const { done, value } = await readIterator.next();

    if (done === true) {
      throw new Error("No more data to provide");
    }

    if (value) {
      // Create a new file to place the contents into
      const newPartialFile = new Uint8Array(partialFile.length + value.length);

      // Set the current data at the start again
      newPartialFile.set(partialFile, 0);

      // Append the new data to the end
      newPartialFile.set(value, partialFile.length);

      // Update the file we have in memory
      partialFile = newPartialFile;
    }
  };

  const readChunk: ReadChunkFunc = (chunkSize, offset) =>
    new Promise(async (resolve, reject) => {
      const requiredSize = chunkSize + offset;

      consola.info(
        `Current partial file size: ${partialFile.length}, need additional: ${requiredSize}`
      );

      while (partialFile.length < requiredSize) {
        await addRemoteChunk();
      }

      resolve(partialFile.slice(offset, chunkSize + offset));
    });

  const result = (await mediainfoInstance.analyzeData(
    () => fileSize,
    readChunk
  )) as ResultObject;

  // End the fetch request
  controller.abort();

  return { result, contentType, size };
};
