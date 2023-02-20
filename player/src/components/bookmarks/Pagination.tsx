import classNames from "classnames";
import { observer } from "mobx-react-lite";
import { TbX } from "react-icons/tb";
import Bookmark from "services/models/bookmark";
import BookmarkPage from "services/models/bookmark_page";

type Props = {
  bookmark: Bookmark;
};

const Pagination = observer(({ bookmark }: Props) => {
  const handleClickPageNumber = (bookmarkPage: BookmarkPage) => {
    if (bookmark.editingInProgress === true) {
      return;
    }

    bookmarkPage.select();
  };

  const renderedPages = bookmark.sortedBookmarkPages.map(
    (bookmarkPage, index) => {
      const classes = classNames({
        "navlink border-l border-stone-700": true,
        ["active"]: bookmarkPage.active === true,
        "cursor-not-allowed": bookmark.editingInProgress === true,
      });

      return (
        <li key={bookmarkPage.id} className="flex items-stretch relative">
          <a
            onClick={() => handleClickPageNumber(bookmarkPage)}
            className={classes}
          >
            {index + 1}
          </a>
        </li>
      );
    }
  );

  return <>{renderedPages}</>;
});

export default Pagination;
