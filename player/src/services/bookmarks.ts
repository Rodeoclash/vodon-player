import Video from "services/models/video";
import Bookmark from "services/models/bookmark";
import { bookmarkPageRef } from "services/models/references";
import { create as createBookmarkPage } from "services/bookmark_pages";
import { SessionInInvalidState } from "services/errors";
import { remove as removeBookmarkPage } from "services/bookmark_pages";

export const create = async (video: Video) => {
  const session = video.session;

  if (session.currentTime === null) {
    throw new SessionInInvalidState(
      "Cannot add bookmark with a session currentTime"
    );
  }

  const bookmarkPage = await createBookmarkPage(video);

  const bookmark = new Bookmark({
    bookmarkPages: [bookmarkPage],
    selectedBookmarkPageRef: bookmarkPageRef(bookmarkPage),
    editingInProgress: true,
    active: true,
  });

  session.addBookmark(bookmark);

  // Since we're already "on" this bookmark (and we marked it active when we
  // created it), mark it as having been seen.
  session.addToSeenBookmarkIds(bookmark);

  return bookmark;
};

export const remove = async (bookmark: Bookmark) => {
  return bookmark.bookmarkPages.map(async (bookmarkPage) => {
    return await removeBookmarkPage(bookmarkPage);
  });
};
