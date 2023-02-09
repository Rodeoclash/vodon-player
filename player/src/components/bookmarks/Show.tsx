import { observer } from "mobx-react-lite";
import Bookmark from "services/models/bookmark";
import RichTextViewer from "components/ui/RichTextViewer";

type Props = {
  bookmark: Bookmark;
};

const Show = observer(({ bookmark }: Props) => {
  const selectedBookmarkPage = bookmark.selectedBookmarkPage;

  const handleClick = () => {
    bookmark.setEditingInProgress(true);
  };

  return (
    <>
      <RichTextViewer content={selectedBookmarkPage.content.data} />
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
