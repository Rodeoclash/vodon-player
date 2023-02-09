import { observer } from "mobx-react-lite";
import Bookmark from "services/models/bookmark";

type Props = {
  bookmark: Bookmark;
};

const Show = observer(({ bookmark }: Props) => {
  const handleClick = () => {
    bookmark.setEditingInProgress(true);
  };

  return (
    <>
      <div className="p-4">Show content</div>
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
