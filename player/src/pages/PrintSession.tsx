import { observer } from "mobx-react-lite";
import { useRouteLoaderData } from "react-router-dom";
import { secondsToHms } from "services/time";
import PrintTile from "components/bookmark_pages/PrintTile";

import type { SessionLoaderData } from "services/routes";

const PrintSession = observer(() => {
  const data = useRouteLoaderData("session") as SessionLoaderData;
  const session = data.session;

  const renderedBookmarks = session.sortedBookmarks.map((bookmark) => {
    const renderedBookmarkPages = bookmark.sortedBookmarkPages.map(
      (bookmarkPage) => {
        return (
          <div key={bookmarkPage.id} className="flex flex-col">
            <PrintTile bookmarkPage={bookmarkPage} />
          </div>
        );
      }
    );

    return (
      <div key={bookmark.id} className="mb-8">
        <h2 className="header-2 mb-4">{secondsToHms(bookmark.timestamp)}</h2>
        <div className="grid grid-cols-3 gap-4">{renderedBookmarkPages}</div>
      </div>
    );
  });

  return (
    <div className="w-full p-8">
      <h1 className="header-1 text-center mb-8">{session.name}</h1>
      {renderedBookmarks}
    </div>
  );
});

export default PrintSession;
