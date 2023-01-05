import {
  model,
  tProp,
  Model,
  types,
  idProp,
  modelAction,
  getParent,
} from "mobx-keystone";

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
  onAttachedToRootStore() {
    (async () => {
      await updateLocalFileHandleExists(this);
      await updateLocalFileHandlePermission(this);
      //await copyToOPFS(this)
    })();
  }

  getSession() {
    return getParent(this);
  }
}
