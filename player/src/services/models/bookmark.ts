import consola from "consola";
import bus from "services/bus";
import { computed, reaction } from "mobx";
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
import { createBookmarkPage } from "services/bookmark_pages";

@model("VodonPlayer/Bookmark")
export default class Bookmark extends Model({
  id: idProp,
  createdAt: tProp(types.number, Date.now()),
  active: tProp(types.boolean, false).withSetter(),
  videoTimestamp: tProp(types.number),
  editingInProgress: tProp(types.boolean, false).withSetter(),
  selectedBookmarkPageRef: prop<Ref<BookmarkPage>>(),
  bookmarkPages: tProp(
    types.array(types.model<BookmarkPage>(() => BookmarkPage)),
    () => []
  ),
}) {
  onAttachedToRootStore() {
    const reactionDisposer = reaction(
      () => this.active,
      async (active) => {
        if (active === true) {
          consola.info(`Activated bookmark: ${this.videoTimestamp}`);
          const video = this.video;
          video.reviewVideoEl?.pause();
          bus.emit("video.pause", video);
        }
      },
      {
        fireImmediately: true,
      }
    );

    return () => {
      reactionDisposer();
    };
  }

  /**
   * Delete this bookmark
   */
  @modelAction
  delete() {
    consola.info(`Deleting bookmark: ${this.videoTimestamp}`);
    this.video.removeBookmark(this);
  }

  @modelAction
  selectBookmarkPage(bookmarkPage: BookmarkPage) {
    consola.info(`Selecting bookmark page: ${bookmarkPage.id}`);

    if (!this.bookmarkPages.includes(bookmarkPage))
      throw new RecordNotFound(
        "Tried to select video but it did not belong to this session"
      );

    this.selectedBookmarkPageRef = bookmarkPageRef(bookmarkPage);
  }

  /**
   * Creates a new bookmark page under this bookmark. Will automatically
   * duplicate the contents of the currently selected bookmark then
   * switch to the bookmark page.
   */
  @modelAction
  createBookmarkPage() {
    consola.info("Creating new blank bookmark page");
    const bookmarkPage = createBookmarkPage();
    this.bookmarkPages.push(bookmarkPage);
    this.selectBookmarkPage(bookmarkPage);
    this.setEditingInProgress(true);
  }

  /**
   * Creates a new bookmark page under this bookmark. Will automatically
   * duplicate the contents of the currently selected bookmark then
   * switch to the bookmark page.
   */
  @modelAction
  deleteBookmarkPage(bookmarkPage: BookmarkPage) {
    consola.info(`Deleting bookmark page: ${bookmarkPage.id}`);
    return (this.bookmarkPages = this.bookmarkPages.filter(
      (innerBookmarkPage) => {
        return innerBookmarkPage.id !== bookmarkPage.id;
      }
    ));
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
