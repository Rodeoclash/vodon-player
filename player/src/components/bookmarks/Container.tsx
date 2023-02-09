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
    "border-b border-stone-700": true,
    "bg-stone-800": bookmark.selected,
  });

  return (
    <div className={classes}>
      <Header bookmark={bookmark} />
      {children}
    </div>
  );
});

export default Container;
