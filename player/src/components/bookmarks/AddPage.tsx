import { observer } from "mobx-react-lite";
import classNames from "classnames";

import Bookmark from "services/models/bookmark";
import Tooltip from "components/ui/Tooltip";

type Props = {
  bookmark: Bookmark;
};

const AddPage = observer(({ bookmark }: Props) => {
  const handleClick = () => {
    bookmark.createBookmarkPage();
  };

  const classes = classNames({
    "border-l border-slate-700 px-2": true,
    "cursor-not-allowed": bookmark.editingInProgress === true,
  });

  return (
    <Tooltip
      className="h-full flex items-center justify-center"
      content="Add page to bookmark"
      offset={[0, 5]}
    >
      <button
        className={classes}
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
    </Tooltip>
  );
});

export default AddPage;
