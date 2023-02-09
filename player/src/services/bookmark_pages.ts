import BookmarkPage from "./models/bookmark_page";
import { frozen } from "mobx-keystone";
import { blankDocument } from "./tiptap";
import { JSONContent } from "@tiptap/react";

export const createBookmarkPage = (content?: JSONContent) => {
  return new BookmarkPage({
    content: frozen(content || blankDocument),
  });
};
