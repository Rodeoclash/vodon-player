import { computed } from "mobx";

import { model, Model, types, tProp, idProp, findParent } from "mobx-keystone";

import Video from "./video";

@model("VodonPlayer/Note")
export default class Note extends Model({
  id: idProp,
  content: tProp(types.string),
}) {
  /**
   * Needs to have the slightly weird syntax here because the parent of the
   * video is the "array" object in the session, not the session itself.
   * @returns Session
   */
  @computed
  get video() {
    return findParent<Video>(this, (p) => p instanceof Video)!;
  }
}
