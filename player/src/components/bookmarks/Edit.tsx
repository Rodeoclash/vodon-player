import { observer } from "mobx-react-lite";
import Bookmark from "services/models/bookmark";

type Props = {
  bookmark: Bookmark;
};

const Edit = observer(({ bookmark }: Props) => {
  const handleClick = () => {
    bookmark.setEditingInProgress(false);
  };

  return (
    <>
      <div className="p-4">Edit content</div>
      <div className="p-4">
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
