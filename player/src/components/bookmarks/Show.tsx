import React from "react";
import { observer } from "mobx-react-lite";
import { secondsToHms } from "services/time";
import Bookmark from "services/models/bookmark";
import CreatePage from "components/bookmarks/CreatePage";

type Props = {
  bookmark: Bookmark;
};

const Show = observer(({ bookmark }: Props) => {
  const [creatingPage, setCreatingPage] = React.useState<boolean>(false);

  const renderedContents = (() => {
    if (creatingPage === true || bookmark.hasPages === false) {
      return <CreatePage bookmark={bookmark} />;
    }
  })();

  return (
    <div>
      <header>
        <div className="flex items-center border-b border-r border-stone-700">
          <div className="flex-shrink p-2 bg-stone-700 text-sm">
            {secondsToHms(bookmark.videoTimestamp)}
          </div>
        </div>
        <div className="flex items-center border-b border-stone-700">
          <div className="flex-grow p-2">TODO: Page numbers</div>
          <button className="border-l border-stone-700 p-2">
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
        </div>
      </header>
      <div className="p-4">{renderedContents}</div>
    </div>
  );
});

export default Show;
