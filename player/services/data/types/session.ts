import { types, Instance } from "mobx-state-tree";
import Video from "./video";

const Session = types.model({
  id: types.identifier,
  name: types.string,
  video: types.late(() => types.reference(Video)),
});

export interface ISession extends Instance<typeof Session> {}

export default Session;
