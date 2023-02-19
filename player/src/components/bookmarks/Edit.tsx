import { observer } from "mobx-react-lite";
import Bookmark from "services/models/bookmark";
import RichTextEditor from "components/ui/RichTextEditor";
import { JSONContent } from "@tiptap/react";

type Props = {
  bookmark: Bookmark;
};

const Edit = observer(({ bookmark }: Props) => {
  const selectedBookmarkPage = bookmark.selectedBookmarkPage;

  const handleClickDone = () => {
    bookmark.setEditingInProgress(false);
  };

  const handleClickDelete = () => {
    if (window.confirm("Are you sure you want to delete this bookmark page?")) {
      selectedBookmarkPage.delete();
    }
  };

  const handleContentUpdate = (content: JSONContent) => {
    selectedBookmarkPage.setContent(content);
  };

  const deleteText =
    bookmark.bookmarkPageCount === 1 ? "Delete bookmark" : "Delete page";

  return (
    <>
      <div>
        <RichTextEditor
          content={selectedBookmarkPage.content.data}
          onUpdate={(content) => handleContentUpdate(content)}
        />
      </div>
      <div className="p-4 pt-0 flex items-center gap-4">
        <button
          className="btn btn-warning block w-full"
          onClick={() => handleClickDelete()}
        >
          {deleteText}
        </button>
        <button
          className="btn btn-secondary block w-full"
          onClick={() => handleClickDone()}
        >
          Done
        </button>
      </div>
    </>
  );
});

export default Edit;
