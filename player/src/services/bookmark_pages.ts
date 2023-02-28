import BookmarkPage from "services/models/bookmark_page";
import Video from "services/models/video";
import { videoRef } from "services/models/references";

import { frozen } from "mobx-keystone";
import { blankDocument } from "./tiptap";
import { JSONContent } from "@tiptap/react";

export const createBookmarkPage = (video: Video, content?: JSONContent) => {
  return new BookmarkPage({
    content: frozen(content || blankDocument),
    drawing: frozen(null),
    videoRef: videoRef(video),
    videoTimestamp: video.currentTime + 0.01,
  });
};
