/*
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
*/

import {
  model,
  modelAction,
  prop,
  tProp,
  Model,
  types,
  idProp,
} from "mobx-keystone";
import { Session } from "./session";

@model("VodonPlayer/Video")
export class Video extends Model({
  id: idProp,
  name: tProp(types.string),
  session: tProp(types.model<Session>(() => Session)),
}) {}
