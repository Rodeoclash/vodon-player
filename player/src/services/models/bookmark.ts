import { computed } from "mobx";
import {
  model,
  Model,
  types,
  tProp,
  idProp,
  findParent,
  modelAction,
  prop,
  Ref,
} from "mobx-keystone";
import { RecordNotFound } from "services/errors";
import BookmarkPage from "./bookmark_page";
import Video from "./video";
import { bookmarkPageRef } from "./references";

@model("VodonPlayer/Bookmark")
export default class Bookmark extends Model({
  id: idProp,
  createdAt: tProp(types.number, Date.now()),
  videoTimestamp: tProp(types.number),
  editingInProgress: tProp(types.boolean, false).withSetter(),
  selectedBookmarkPageRef: prop<Ref<BookmarkPage>>(),
  bookmarkPages: tProp(
    types.array(types.model<BookmarkPage>(() => BookmarkPage)),
    () => []
  ),
}) {
  @modelAction
  selectBookmarkPage(bookmarkPage: BookmarkPage) {
    if (!this.bookmarkPages.includes(bookmarkPage))
      throw new RecordNotFound(
        "Tried to select video but it did not belong to this session"
      );

    this.selectedBookmarkPageRef = bookmarkPageRef(bookmarkPage);
  }

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

  @computed
  get sortedBookmarkPages() {
    return [...this.bookmarkPages].sort((a, b) => {
      return a.createdAt - b.createdAt;
    });
  }

  @computed
  get selectedBookmarkPage() {
    return this.selectedBookmarkPageRef.current;
  }
}
