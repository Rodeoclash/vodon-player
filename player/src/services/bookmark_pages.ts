import BookmarkPage from "services/models/bookmark_page";
import Video from "services/models/video";
import { videoRef } from "services/models/references";
import { InvalidVideo } from "./errors";
import bus from "services/bus";

import { frozen } from "mobx-keystone";
import { blankDocument } from "./tiptap";
import { JSONContent } from "@tiptap/react";

export const create = (video: Video, content?: JSONContent) => {
  return new BookmarkPage({
    content: frozen(content || blankDocument),
    drawing: frozen(null),
    videoRef: videoRef(video),
    videoTimestamp: video.currentTime + 0.01,
  });
};

export const activate = (bookmarkPage: BookmarkPage, updateTime: Boolean) => {
  const video = bookmarkPage.video;
  const session = bookmarkPage.session;
  const bookmark = bookmarkPage.bookmark;

  if (video.reviewVideoEl === null) {
    throw new InvalidVideo(
      "Video review element was not ready so cannot change bookmarks"
    );
  }

  // The time we're going to be going to
  const newTime = bookmarkPage.videoTimestamp;

  // Set the video attached to the bookmark page to be active in the display
  session.selectVideo(bookmarkPage.video);

  // Set the time of the video to match what's stored on the page
  if (updateTime === true) {
    video.reviewVideoEl.currentTime = newTime;

    // We need to wait until after the video has seeked to activate the
    // bookmark as we deactive *all* bookmarks in the seek operation.
    const handleAfterSeek = () => {
      if (video.reviewVideoEl === null) {
        return;
      }
      bookmark.setActive(true);
      video.reviewVideoEl.removeEventListener("seeked", handleAfterSeek);
    };

    video.reviewVideoEl.addEventListener("seeked", handleAfterSeek);
  }

  // Ensure follower videos are at the correct time
  bus.emit("video.gotoTime", bookmarkPage.video, newTime);

  // Select the first page in the bookmark set
  bookmark.selectBookmarkPage(bookmarkPage);

  // Deactive all bookmarks
  session.deactivateBookmarks();

  // Activate the bookmark that was clicked on
  bookmark.setActive(true);

  // mark that we've seen this bookmark id in the session, it will now be
  // excluded from activation checks
  session.addToSeenBookmarkIds(bookmark);
};
