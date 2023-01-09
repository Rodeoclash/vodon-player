import Dexie, { Table } from "dexie";

export interface VideoFileHandle {
  id?: number;
}

class Storage extends Dexie {
  videoFileHandles!: Table<VideoFileHandle, number>;

  constructor() {
    super("vodon-player");
    this.version(1).stores({
      rootStore: "id",
      videoFileHandles: "id",
    });
  }
}

const database = new Storage();

export default database;
