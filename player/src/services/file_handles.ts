import Dexie, { Table } from "dexie";

export interface FileHandle {
  id?: number;
  fileHandle: FileSystemFileHandle;
}

class Storage extends Dexie {
  storageVideoFileHandles!: Table<FileHandle, number>;
  setupVideoSyncImageFileHandles!: Table<FileHandle, number>;
  bookmarkPageFrameFileHandles!: Table<FileHandle, number>;

  constructor() {
    super("vodon-player");
    this.version(1).stores({
      storageVideoFileHandles: "id",
      setupVideoSyncImageFileHandles: "id",
      bookmarkPageFrameFileHandles: "id",
    });
  }
}

const database = new Storage();

export default database;
