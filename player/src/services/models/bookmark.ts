import { computed } from "mobx";

import { model, Model, types, tProp, idProp, findParent } from "mobx-keystone";

import BookmarkPage from "./bookmark_page";
import Video from "./video";

@model("VodonPlayer/Bookmark")
export default class Bookmark extends Model({
  id: idProp,
  createdAt: tProp(types.number, Date.now()),
  videoTimestamp: tProp(types.number),
  editingInProgress: tProp(types.boolean, false).withSetter(),
  bookmarkPages: tProp(
    types.array(types.model<BookmarkPage>(() => BookmarkPage)),
    () => []
  ),
}) {
  @computed
  get video() {
    return findParent<Video>(this, (p) => p instanceof Video)!;
  }

  @computed
  get session() {
    return this.video.session;
  }

  @computed
  get bookmarkPageCount() {
    return this.bookmarkPages.length;
  }

  @computed
  get hasBookmarkPages() {
    return this.bookmarkPageCount > 0;
  }

  @computed
  get selected(): boolean {
    return this.session.selectedBookmark?.id === this.id;
  }
}
