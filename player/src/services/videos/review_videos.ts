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
    // Notify that we are no longer seeking
    video.setReviewVideoSeeking(false);

    // Need to update time here after seeking
    video.setCurrentTime(el.currentTime);

    const session = video.session;

    // We only want to run post seek operations against the current video
    // of the session.
    if (session.isCurrentVideo(video) === false) {
      return;
    }

    // Convert the current time of the video element to the session time
    // (current session time here is not correct yet)
    const sessionTime = el.currentTime + video.beginsAt;

    // Update our seen / not seen tracking using our calculated session time
    session.seeBookmarksBefore(sessionTime - VIDEO_FUDGE_FACTOR);
    session.unseeBookmarksAfter(sessionTime + VIDEO_FUDGE_FACTOR);
    session.deactivateBookmarks();

    // Finally, reactivate any bookmarks that have been marked to reactivate
    // after a seek operation.
    session.bookmarks.forEach((bookmark) => {
      if (bookmark.activateAfterNextSeek === true) {
        bookmark.setActive(true);
        bookmark.setActivateAfterNextSeek(false);
      }
    });
  });

  // Fired every time the frame in the video changes, used to automatically
  // sync the current time of the video into the store. This is used for things
  // like the video time counter and progress bar.
  const handleVideoFrame = (
    now: number,
    metadata: VideoFrameCallbackMetadata
  ) => {
    const session = video.session;

    // The main clock updates for the current video time occur here.
    video.setCurrentTime(metadata.mediaTime);

    // iterate through all bookmarks and pages to determine which bookmarks
    // should be marked as active. Marking a bookmark as active triggers
    // watchers on that attribute that pause the video.
    //
    // We need to loop all videos here to pickup bookmarks that might be on
    // videos we're not currently watching
    session.bookmarks.forEach((bookmark) => {
      // We only care about comparing the time on the first bookmark page
      const bookmarkPage = bookmark.bookmarkPages[0];

      // Only perform the bookmark check for the video currently associated
      // with this bookmarkPage (i.e. the first video)
      if (bookmarkPage.video.id === video.id) {
        // If we're past or on the timestamp for this video and we haven't seen
        // the bookmark then it's ready to be activated.
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
