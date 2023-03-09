import consola from "consola";
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
import bus from "services/bus";
import BookmarkPage from "./bookmark_page";
import Session from "./session";
import { bookmarkPageRef } from "./references";
import { create } from "services/bookmark_pages";
import { SessionInInvalidState } from "services/errors";

@model("VodonPlayer/Bookmark")
export default class Bookmark extends Model({
  id: idProp,
  createdAt: tProp(types.number, Date.now()),

  // Is this bookmark currently active? (i.e. displaying highlighted in the
  // sidebar and displaying drawing from the current page)
  active: tProp(types.boolean, false).withSetter(),

  // Will trigger the bookmark to be active after the next seek. This is useful
  // when we restore from being saved or want to activate the bookmark after
  // clicking on its timecode
  activateAfterNextSeek: tProp(types.boolean, false).withSetter(),

  // Is this bookmark currently being edited?
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
          consola.info(`Bookmark was activated: ${this.timestamp}`);

          if (this.selectedBookmarkPage.video.reviewVideoEl === null) {
            return;
          }

          //this.session.selectVideo(this.selectedBookmarkPage.video);
          this.selectedBookmarkPage.video.reviewVideoEl.pause();
          bus.emit("video.pause", this.selectedBookmarkPage.video);
        }
      },
      {
        fireImmediately: true,
      }
    );

    if (this.active === true) {
      this.setActivateAfterNextSeek(true);
    }

    return () => {
      reactionDisposer();
    };
  }

  /**
   * Delete this bookmark
   */
  @modelAction
  delete() {
    consola.info(`Deleting bookmark: ${this.timestamp}`);
    this.session.removeBookmark(this);
  }

  @modelAction
  addBookmarkPage(bookmarkPage: BookmarkPage) {
    consola.info(`Adding bookmark page: ${bookmarkPage.id}`);
    this.bookmarkPages.push(bookmarkPage);
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
  deleteBookmarkPage(bookmarkPage: BookmarkPage) {
    consola.info(`Deleting bookmark page: ${bookmarkPage.id}`);
    return (this.bookmarkPages = this.bookmarkPages.filter(
      (innerBookmarkPage) => {
        return innerBookmarkPage.id !== bookmarkPage.id;
      }
    ));
  }

  /**
   * The session time of the bookmark page.
   */
  @computed
  get timestamp() {
    return this.bookmarkPages[0].timestamp;
  }

  /**
   * The "real" time of bookmark page.
   */
  @computed
  get videoTimestamp() {
    return this.bookmarkPages[0].videoTimestamp;
  }

  @computed
  get session() {
    return findParent<Session>(this, (p) => p instanceof Session)!;
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
  get sortedBookmarkPages() {
    return [...this.bookmarkPages].sort((a, b) => {
      return a.createdAt - b.createdAt;
    });
  }

  @computed
  get selectedBookmarkPage() {
    return this.selectedBookmarkPageRef.current;
  }

  @computed
  get hasBeenSeen() {
    return this.session.hasSeenBookmark(this);
  }
}
