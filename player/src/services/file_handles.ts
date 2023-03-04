import Dexie, { Table } from "dexie";

export interface FileHandle {
  id?: number;
  fileHandle: FileSystemFileHandle;
}

class Storage extends Dexie {
  localVideoFileHandles!: Table<FileHandle, number>;
  storageVideoFileHandles!: Table<FileHandle, number>;

  constructor() {
    super("vodon-player");
    this.version(1).stores({
      localVideoFileHandles: "id",
      storageVideoFileHandles: "id",
      //setupVideoSyncImageFileHandles: "id",
    });
  }
}

const database = new Storage();

export default database;
