import { addFromBlob, remove as opfsRemove } from "services/opfs";
import fileHandles from "services/file_handles";
import BookmarkPage from "services/models/bookmark_page";

export const storeFrame = async (
  bookmarkPage: BookmarkPage,
  frame: Blob
): Promise<BookmarkPage> => {
  return new Promise((resolve, reject) => {
    addFromBlob(bookmarkPage.framePath, frame, {
      onComplete: async (event) => {
        // Finally, save the file handle into the file system database so it
        // becomes available when using the bookmark page.
        await fileHandles.table("bookmarkPageFrameFileHandles").put({
          id: bookmarkPage.id,
          fileHandle: event.fileHandle,
        });

        resolve(bookmarkPage);
      },
    });
  });
};

export const removeFrame = async (
  bookmarkPage: BookmarkPage
): Promise<BookmarkPage> => {
  return new Promise((resolve, reject) => {
    opfsRemove(bookmarkPage.framePath, {
      onComplete: async () => {
        // Remove storage file handle (if it exists)
        await fileHandles
          .table("bookmarkPageFrameFileHandles")
          .delete(bookmarkPage.id);

        resolve(bookmarkPage);
      },
    });
  });
};
