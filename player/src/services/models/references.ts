import { rootRef, detach } from "mobx-keystone";
import Video from "./video";
import Bookmark from "./bookmark";
import BookmarkPage from "./bookmark_page";

export const videoRef = rootRef<Video>("VodonPlayer/VideoRef", {
  onResolvedValueChange(ref, newVideo, oldVideo) {
    if (oldVideo && !newVideo) {
      detach(ref);
    }
  },
});

export const bookmarkRef = rootRef<Bookmark>("VodonPlayer/BookmarkRef", {
  onResolvedValueChange(ref, newBookmark, oldBookmark) {
    if (oldBookmark && !newBookmark) {
      detach(ref);
    }
  },
});

export const bookmarkPageRef = rootRef<BookmarkPage>(
  "VodonPlayer/BookmarkPageRef",
  {
    onResolvedValueChange(ref, newBookmarkPage, oldBookmarkPage) {
      if (oldBookmarkPage && !newBookmarkPage) {
        detach(ref);
      }
    },
  }
);
