import { model, tProp, Model, types, idProp, findParent } from "mobx-keystone";

import Session from "./session";

import {
  syncLocalFileHandle,
  syncStorageFileHandle,
  syncLocalFilePermission,
} from "services/videos";

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

  // Does a local file handle exist for this video? (The file handle is
  // accessible on `localFileHandle` but the property is not reactive)
  localFileHandleExists: tProp(
    types.maybeNull(types.boolean),
    null
  ).withSetter(),

  // Does a handle exist in the OPFS storage for this video?
  storageFileHandleExists: tProp(
    types.maybeNull(types.boolean),
    null
  ).withSetter(),

  // What is the permission of the local file handle? This can be used to
  // determine if we need to request accesss to it again.
  localFileHandlePermission: tProp(
    types.maybeNull(types.string),
    null
  ).withSetter(),
}) {
  /**
   * Synchronise the local state based on what we've stored in the database.
   */
  onAttachedToRootStore() {
    (async () => {
      await syncLocalFileHandle(this);
      await syncStorageFileHandle(this);
      await syncLocalFilePermission(this);
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
