import MediaInfoFactory, { MediaInfo, ReadChunkFunc } from "mediainfo.js";
import type { ResultObject } from "mediainfo.js/dist/types";

const mediainfoInstance = (await MediaInfoFactory({
  coverData: false,
  format: "object",
  locateFile: (path, prefix) => {
    return `/${path}`;
  },
})) as MediaInfo;

export const readMediaData = async (file: File) => {
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
