import { computed } from "mobx";

import { model, Model, types, tProp, idProp, findParent } from "mobx-keystone";

import Bookmark from "./bookmark";

@model("VodonPlayer/BookmarkPage")
export default class BookmarkPage extends Model({
  id: idProp,
  createdAt: tProp(types.number, Date.now()),
  content: tProp(types.frozen(types.unchecked<any>())),
}) {
  @computed
  get bookmark() {
    return findParent<Bookmark>(this, (p) => p instanceof Bookmark)!;
  }

  @computed
  get video() {
    return this.bookmark.video;
  }

  @computed
  get session() {
    return this.video.session;
  }
}
