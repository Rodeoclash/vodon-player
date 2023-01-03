import { types, Instance } from "mobx-state-tree";
import Session from "./session";

const Video = types
  .model({
    id: types.identifier,
    name: types.string,
    session: types.late(() => types.reference(Session)),
  })
  .volatile<{ userSelectedFileHandle: FileSystemEntry | null }>((self) => ({
    userSelectedFileHandle: null,
  }))
  .actions((self) => ({
    setUserSelectedFileHandle(fileHandle: FileSystemEntry) {
      self.userSelectedFileHandle = fileHandle;
    },
  }));

export interface IVideo extends Instance<typeof Video> {}

export default Video;
