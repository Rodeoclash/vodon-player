/*
import { types, Instance } from "mobx-state-tree";
import Video from "./video";

const Session = types.model({
  id: types.identifier,
  name: types.string,
  video: types.late(() => types.reference(Video)),
});

export interface ISession extends Instance<typeof Session> {}

export default Session;
*/

import { model, modelAction, Model, types, tProp, idProp } from "mobx-keystone";
import { Video } from "./video";

@model("VodonPlayer/Session")
export class Session extends Model({
  id: idProp,
  name: tProp(types.string),
  videos: tProp(types.array(types.model<Video>(() => Video)), () => []),
}) {
  @modelAction
  setName(name: string) {
    this.name = name;
  }
}
