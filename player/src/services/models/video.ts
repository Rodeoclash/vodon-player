import { model, tProp, Model, types, idProp, findParent } from "mobx-keystone";

import Session from "./session";

import {
  updateLocalFileHandleExists,
  updateLocalFileHandlePermission,
} from "services/videos";

enum PermissionType {
  granted = "granted",
  denied = "denied",
  prompt = "prompt",
}

@model("VodonPlayer/Video")
export default class Video extends Model({
  id: idProp,
  name: tProp(types.string),
  localFileHandleExists: tProp(
    types.maybeNull(types.boolean),
    null
  ).withSetter(),
  localFileHandlePermission: tProp(
    types.maybeNull(types.enum(PermissionType)),
    null
  ).withSetter(),
  opfsFileHandleExists: tProp(
    types.maybeNull(types.boolean),
    null
  ).withSetter(),
}) {
  /**
   * Synchronise the local state based on what we've stored in the database.
   */
  onAttachedToRootStore() {
    (async () => {
      await updateLocalFileHandleExists(this);
      await updateLocalFileHandlePermission(this);
    })();
  }

  /**
   * Needs to have the slightly weird syntax here because the parent of the
   * video is the "array" object in the session, not the session itself.
   * @returns Session
   */
  getSession() {
    return findParent<Session>(this, (p) => p instanceof Session)!;
  }
}
