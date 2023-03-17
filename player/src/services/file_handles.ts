import Dexie, { Table } from "dexie";

export interface FileHandle {
  id?: number;
  fileHandle: FileSystemFileHandle;
}

class Storage extends Dexie {
  // File handles to videos that have been copied into the OPFS. Copying
  // allows Vodon to manage the file / not need to re-request read permissions
  // but obviously impacts storage size.
  //
  // Intended that files downloaded from cloud storage will end up in this store.
  videoFileHandles!: Table<FileHandle, number>;

  // File handles that are "local" to the users file system. It's highly likely
  // that these will need to have read premissions re-requested on them after
  // loading the app.
  videoFileHandlesLocal!: Table<FileHandle, number>;

  // References to frame grabs on bookmarks. Stored in the OPFS.
  videoFrameFileHandles!: Table<FileHandle, number>;

  constructor() {
    super("vodon-player");
    this.version(1).stores({
      videoFileHandles: "id",
      videoFrameFileHandles: "id",
      videoFileHandlesLocal: "id",
    });
  }
}

const database = new Storage();

export default database;
