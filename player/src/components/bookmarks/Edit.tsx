import { observer } from "mobx-react-lite";
import Bookmark from "services/models/bookmark";
import RichTextEditor from "components/ui/RichTextEditor";
import { JSONContent } from "@tiptap/react";

type Props = {
  bookmark: Bookmark;
};

const Edit = observer(({ bookmark }: Props) => {
  const selectedBookmarkPage = bookmark.selectedBookmarkPage;

  const handleClick = () => {
    bookmark.setEditingInProgress(false);
  };

  const handleContentUpdate = (content: JSONContent) => {
    selectedBookmarkPage.setContent(content);
  };

  return (
    <>
      <div>
        <RichTextEditor
          content={selectedBookmarkPage.content.data}
          onUpdate={(content) => handleContentUpdate(content)}
        />
      </div>
      <div className="p-4 pt-0">
        <button
          className="btn btn-secondary block w-full"
          onClick={() => handleClick()}
        >
          Done
        </button>
      </div>
    </>
  );
});

export default Edit;
