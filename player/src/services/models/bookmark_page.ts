import consola from "consola";
import { computed } from "mobx";

import {
  model,
  Model,
  types,
  tProp,
  idProp,
  findParent,
  modelAction,
  frozen,
} from "mobx-keystone";

import Bookmark from "./bookmark";
import { JSONContent } from "@tiptap/react";
import { TDDocument } from "@tldraw/tldraw";

@model("VodonPlayer/BookmarkPage")
export default class BookmarkPage extends Model({
  id: idProp,
  createdAt: tProp(types.number, Date.now()),
  content: tProp(types.frozen(types.unchecked<JSONContent>())),
  drawing: tProp(types.frozen(types.unchecked<TDDocument | null>())),
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

  @modelAction
  select() {
    this.bookmark.selectBookmarkPage(this);
  }

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

  @computed
  get active() {
    return this.bookmark.selectedBookmarkPage.id === this.id;
  }
}
