import BookmarkPage from "services/models/bookmark_page";
import Video from "services/models/video";
import VideoFrame from "services/models/video_frame";
import { videoRef } from "services/models/references";
import { InvalidVideo } from "./errors";
import bus from "services/bus";
import {
  remove as removeVideoFrame,
  store as storeVideoFrame,
} from "services/video_frames/assets";
import { screenshot } from "services/videos";
import { frozen } from "mobx-keystone";
import { blankDocument } from "./tiptap";
import { JSONContent } from "@tiptap/react";

/**
 * Creates a new bookmark page, it assumed that it is attached to a bookmark
 * itself outside of this function. This will also have the side affect of
 * populating the bookmark page file handles table with a screenshot of the
 * video at this point in time.
 *
 * @param video The current video that the bookmark page will use.
 * @param content Content of the bookmark page, can be omitted and a blank
 * document will be used instead. This is used to duplicate content from the
 * previous bookmark page in a bookmark to ease creating content.
 * @returns The created bookmark page.
 */
export const create = async (
  video: Video,
  content?: JSONContent
): Promise<BookmarkPage> => {
  if (video.reviewVideoEl === null) {
    throw new InvalidVideo(
      "Review video element was not present so could not take screenshot"
    );
  }

  // Take a screenshot of the current video frame of the review element
  const frame = await screenshot(
    video.reviewVideoEl,
    video.width,
    video.height
  );

  // Create the video frame that will hold the frame of the bookmark page.
  const videoFrame = new VideoFrame({});

  // Store the frame against the bookmark page
  await storeVideoFrame(videoFrame, frame);

  // Create the bookmarkPage itself
  const bookmarkPage = new BookmarkPage({
    content: frozen(content || blankDocument),
    drawing: frozen(null),
    videoRef: videoRef(video),
    videoTimestamp: video.currentTime + 0.01,
    videoFrame,
  });

  return bookmarkPage;
};

/**
 * Remove a bookmark page from the system, ensures the the frame is removed
 * from the OPFS and file handles database as well.
 *
 * @param bookmarkPage The bookmarkPage to remove
 * @returns The deleted bookmarkPage
 */
export const remove = async (bookmarkPage: BookmarkPage) => {
  if (bookmarkPage.videoFrame !== null) {
    await removeVideoFrame(bookmarkPage.videoFrame);
  }

  bookmarkPage.delete();

  return bookmarkPage;
};

/**
 * Activates the given bookmark in the system.
 *
 * @param bookmarkPage The bookmark page to activate
 * @param updateTime If we want to update the video time as well. We do this
 * when clicking onto a bookmarkPage at a different time from the one we're
 * currently on, but not when clicking between pages on the same time.
 * @returns The bookmark page that was activated.
 */
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
  session.selectVideo(video);

  // Set the time of the video to match what's stored on the page
  if (updateTime === true) {
    bookmark.setActivateAfterNextSeek(true);
    video.reviewVideoEl.currentTime = newTime;
  }

  // Ensure follower videos are at the correct time
  bus.emit("video.gotoTime", video, newTime);

  // Select the first page in the bookmark set
  bookmark.selectBookmarkPage(bookmarkPage);

  // Deactive all bookmarks
  session.deactivateBookmarks();

  // Activate the bookmark that was clicked on
  bookmark.setActive(true);

  // mark that we've seen this bookmark id in the session, it will now be
  // excluded from activation checks
  session.addToSeenBookmarkIds(bookmark);

  return bookmarkPage;
};
