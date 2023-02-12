import classNames from "classnames";
import { observer } from "mobx-react-lite";
import Bookmark from "services/models/bookmark";

type Props = {
  bookmark: Bookmark;
};

const AddPage = observer(({ bookmark }: Props) => {
  const handleClick = () => {
    bookmark.createBookmarkPage();
  };

  return (
    <button
      className="border-l border-stone-700 px-2"
      onClick={() => handleClick()}
      disabled={bookmark.editingInProgress === true}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    </button>
  );
});

export default AddPage;
