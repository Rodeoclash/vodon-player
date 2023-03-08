import { observer } from "mobx-react-lite";
import Bookmark from "services/models/bookmark";
import RichTextViewer from "components/ui/RichTextViewer";
import { activate } from "services/bookmark_pages";

type Props = {
  bookmark: Bookmark;
};

const Show = observer(({ bookmark }: Props) => {
  const handleClick = () => {
    activate(bookmark.selectedBookmarkPage, true);
    bookmark.setEditingInProgress(true);
  };

  return (
    <>
      <RichTextViewer content={bookmark.selectedBookmarkPage.content.data} />
      <div className="p-4 pt-0">
        <button
          className="btn btn-secondary block w-full"
          onClick={() => handleClick()}
        >
          Edit
        </button>
      </div>
    </>
  );
});

export default Show;
