import { computed } from "mobx";

import { model, Model, types, tProp, idProp, findParent } from "mobx-keystone";

import BookmarkPage from "./bookmark_page";
import Video from "./video";

@model("VodonPlayer/Bookmark")
export default class Bookmark extends Model({
  id: idProp,
  createdAt: tProp(types.number, Date.now()),
  pages: tProp(
    types.array(types.model<BookmarkPage>(() => BookmarkPage)),
    () => []
  ),
}) {
  @computed
  get video() {
    return findParent<Video>(this, (p) => p instanceof Video)!;
  }
}
