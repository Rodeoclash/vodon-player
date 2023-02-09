import { observer } from "mobx-react-lite";
import classNames from "classnames";
import Bookmark from "services/models/bookmark";
import Header from "components/bookmarks/Header";

type Props = {
  bookmark: Bookmark;
  children: React.ReactNode;
};

const Container = observer(({ children, bookmark }: Props) => {
  const classes = classNames({
    "outline outline-2 outline-sky-500": bookmark.selected,
  });

  return (
    <div className={classes}>
      <Header bookmark={bookmark} />
      {children}
    </div>
  );
});

export default Container;
