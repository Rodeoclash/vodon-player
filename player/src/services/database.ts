import Dexie, { Table } from "dexie";

export const localStorageKey = "vodon-player-data";

// TODO: Move this to dexie
export const getInitalState = () => {
  if (typeof Storage === "undefined") {
    return null;
  }

  const storedData = localStorage.getItem(localStorageKey);
  return !storedData ? null : JSON.parse(storedData);
};

export interface VideoFile {
  id?: number;
}

export default class Storage extends Dexie {
  videoFiles!: Table<VideoFile>;

  constructor() {
    super("vodon-player");
    this.version(1).stores({
      videoFiles: "id",
    });
  }
}
