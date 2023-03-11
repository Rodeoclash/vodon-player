import consola from "consola";
import { computed } from "mobx";
import { safeFileName } from "services/opfs";
import VideoFrame from "services/models/video_frame";

import {
  model,
  Model,
  types,
  tProp,
  idProp,
  findParent,
  modelAction,
  frozen,
  prop,
  Ref,
} from "mobx-keystone";

import Bookmark from "./bookmark";
import Video from "./video";

import { JSONContent } from "@tiptap/react";
import { TDDocument } from "@tldraw/tldraw";

@model("VodonPlayer/BookmarkPage")
export default class BookmarkPage extends Model({
  id: idProp,
  createdAt: tProp(types.number, Date.now()),
  content: tProp(types.frozen(types.unchecked<JSONContent>())),
  drawing: tProp(types.frozen(types.unchecked<TDDocument | null>())),
  drawingSVG: tProp(types.maybeNull(types.string)).withSetter(),
  videoRef: prop<Ref<Video>>(),
  videoTimestamp: tProp(types.number),
  videoFrame: tProp(types.maybeNull(types.model(VideoFrame))),
}) {
  @modelAction
  setContent(content: JSONContent) {
    consola.info("Persisting content into bookmark page");
    this.content = frozen(content);
  }

  @modelAction
  setDrawing(document: TDDocument) {
    consola.info("Persisting drawing into bookmark page");
    this.drawing = frozen(structuredClone(document));
  }

  /**
   * Deletes a bookmark page. Requires special care around handling the
   * removal of the bookmark itself / switching to another bookmark if the
   * deleted bookmark is the currently selected one.
   */
  @modelAction
  delete() {
    consola.info(`Deleting bookmark page: ${this.id}`);

    // If we're the only bookmark page in the bookmark, delete the entire bookmark.
    if (this.bookmark.bookmarkPages.length === 1) {
      this.bookmark.delete();

      // If other bookmarks exist, we need to select a different one before we delete
    } else {
      // if we're the last bookmark in the list, select the previous bookmark by
      // default
      if (this.index === this.bookmark.bookmarkPageCount - 1) {
        this.bookmark.selectBookmarkPage(
          this.bookmark.bookmarkPages[this.index - 1]
        );

        // Otherwise select the next bookmark
      } else {
        this.bookmark.selectBookmarkPage(
          this.bookmark.bookmarkPages[this.index + 1]
        );
      }

      // Once we've moved off the bookmark, we can delete it
      this.bookmark.deleteBookmarkPage(this);
    }
  }

  @computed
  get bookmark() {
    return findParent<Bookmark>(this, (p) => p instanceof Bookmark)!;
  }

  @computed
  get video() {
    return this.videoRef.current;
  }

  @computed
  get session() {
    return this.video.session;
  }

  /**
   * The "session timestamp" (i.e. global time) of where this bookmark page is.
   */
  @computed
  get timestamp() {
    if (this.videoRef.isValid === false) {
      return null;
    }
    return this.videoTimestamp + this.video.beginsAt;
  }

  @computed
  get active() {
    return this.bookmark.selectedBookmarkPage.id === this.id;
  }

  @computed
  get index() {
    return this.bookmark.bookmarkPages.findIndex((bookmarkPage) => {
      return bookmarkPage.id === this.id;
    });
  }
}
