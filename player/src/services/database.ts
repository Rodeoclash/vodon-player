import Dexie, { Table } from "dexie";

export interface VideoFileHandle {
  id?: number;
  fileHandle: FileSystemFileHandle;
}

class Storage extends Dexie {
  localVideoFileHandles!: Table<VideoFileHandle, number>;
  storageVideoFileHandles!: Table<VideoFileHandle, number>;

  constructor() {
    super("vodon-player");
    this.version(1).stores({
      localVideoFileHandles: "id",
      storageVideoFileHandles: "id",
    });
  }
}

const database = new Storage();

export default database;
