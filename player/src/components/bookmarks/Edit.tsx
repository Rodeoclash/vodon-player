import { observer } from "mobx-react-lite";
import Bookmark from "services/models/bookmark";
import Editor from "components/ui/Editor";
import { JSONContent } from "@tiptap/react";

type Props = {
  bookmark: Bookmark;
};

const Edit = observer(({ bookmark }: Props) => {
  const handleClick = () => {
    bookmark.setEditingInProgress(false);
  };

  const handleContentUpdate = (content: JSONContent) => {
    console.log(content);
  };

  return (
    <>
      <div>
        <Editor onUpdate={(content) => handleContentUpdate(content)} />
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
