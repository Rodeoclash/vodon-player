import Video from "services/models/video";
import { activate } from "services/bookmark_pages";
import { VIDEO_FUDGE_FACTOR } from "services/videos";

export const buildElement = async (
  video: Video,
  url: string
): Promise<HTMLVideoElement> => {
  const el = document.createElement("video");

  el.volume = video.volume;
  el.src = url;

  // The + 0.01 is required to prevent the video restoring on the *previous*
  // frame when loading from storage!
  el.currentTime = video.currentTime + 0.01;

  el.addEventListener("play", async () => {
    video.setReviewVideoPlaying(true);
    video.session.deactivateBookmarks();
  });

  el.addEventListener("pause", async () => {
    video.setReviewVideoPlaying(false);
  });

  el.addEventListener("seeking", async () => {
    video.setReviewVideoSeeking(true);
  });

  el.addEventListener("seeked", async () => {
    video.setReviewVideoSeeking(false);
    video.session.deactivateBookmarks();
    video.session.seeBookmarksBefore(el.currentTime - VIDEO_FUDGE_FACTOR);
    video.session.unseeBookmarksAfter(el.currentTime + VIDEO_FUDGE_FACTOR);
  });

  // Fired every time the frame in the video changes, used to automatically
  // sync the current time of the video into the store. This is used for things
  // like the video time counter and progress bar.
  const handleVideoFrame = (
    now: number,
    metadata: VideoFrameCallbackMetadata
  ) => {
    const session = video.session;

    video.setCurrentTime(metadata.mediaTime);

    // We only want to do bookmark checks using a single video so if we're not
    // the selected video in the session, skip
    //if (video.session.selectedVideo !== null && video.session.selectedVideo.id == video.id) {

    // iterate through all bookmarks and pages to determine which bookmarks
    // should be marked as active. Marking a bookmark as active triggers
    // watchers on that attribute that pause the video.
    session.bookmarks.forEach((bookmark) => {
      const bookmarkPage = bookmark.bookmarkPages[0];

      if (bookmarkPage.video.id === video.id) {
        if (
          bookmarkPage.videoTimestamp <= metadata.mediaTime &&
          session.hasSeenBookmark(bookmark) === false
        ) {
          activate(bookmarkPage, false);
        }
      }
    });

    el.requestVideoFrameCallback(handleVideoFrame);
  };

  el.requestVideoFrameCallback(handleVideoFrame);

  return el;
};
