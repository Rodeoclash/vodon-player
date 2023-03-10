import Dexie, { Table } from "dexie";

export interface FileHandle {
  id?: number;
  fileHandle: FileSystemFileHandle;
}

class Storage extends Dexie {
  videoFileHandles!: Table<FileHandle, number>;
  videoFrameFileHandles!: Table<FileHandle, number>;

  constructor() {
    super("vodon-player");
    this.version(1).stores({
      videoFileHandles: "id",
      videoFrameFileHandles: "id",
    });
  }
}

const database = new Storage();

export default database;
