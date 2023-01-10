import { model, tProp, Model, types, idProp, findParent } from "mobx-keystone";

import Session from "./session";

@model("VodonPlayer/Video")
export default class Video extends Model({
  id: idProp,
  name: tProp(types.string),
  type: tProp(types.string),

  // The local video file is being copied to storage
  copyToStorageInProgress: tProp(
    types.maybeNull(types.boolean),
    null
  ).withSetter(),

  // How far through the copy process we are
  copyToStorageProgress: tProp(
    types.maybeNull(types.number),
    null
  ).withSetter(),
}) {
  /**
   * Needs to have the slightly weird syntax here because the parent of the
   * video is the "array" object in the session, not the session itself.
   * @returns Session
   */
  getSession() {
    return findParent<Session>(this, (p) => p instanceof Session)!;
  }
}
