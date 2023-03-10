import { observer } from "mobx-react-lite";
import { useRouteLoaderData } from "react-router-dom";
import { secondsToHms } from "services/time";
import RichTextViewer from "components/ui/RichTextViewer";
import VideoSizer from "components/ui/VideoSizer";
import Drawing from "components/ui/Drawing";

import type { SessionLoaderData } from "services/routes";

const PrintSession = observer(() => {
  const data = useRouteLoaderData("session") as SessionLoaderData;
  const session = data.session;

  const renderedBookmarks = session.sortedBookmarks.map((bookmark) => {
    const renderedBookmarkPages = bookmark.sortedBookmarkPages.map(
      (bookmarkPage, idx) => {
        const video = bookmarkPage.video;

        const imageStyle = {
          aspectRatio: `${video.width}/${video.height}`,
        };

        return (
          <div key={bookmarkPage.id} className="flex flex-col">
            {bookmarkPage.videoFrame !== null &&
              bookmarkPage.videoFrame.url !== null && (
                <>
                  <div className="relative">
                    <div className="absolute inset-0">
                      <VideoSizer
                        originalWidth={video.width}
                        originalHeight={video.height}
                      >
                        {({ width, height, scale }) => {
                          const dimensionsStyle = {
                            width: `${width}px`,
                            height: `${height}px`,
                          };

                          return (
                            <div style={dimensionsStyle} className="relative">
                              <div className="absolute inset-0 z-30">
                                <Drawing
                                  drawingId={bookmarkPage.id}
                                  drawing={bookmarkPage.drawing.data || null}
                                  scale={scale}
                                  readOnly={true}
                                />
                              </div>
                            </div>
                          );
                        }}
                      </VideoSizer>
                    </div>

                    <img
                      className="w-full"
                      src={bookmarkPage.videoFrame.url}
                      style={imageStyle}
                    />
                  </div>
                  <div className="bg-zinc-800 p-4">
                    <RichTextViewer content={bookmarkPage.content.data} />
                  </div>
                </>
              )}
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
    <div className="w-full h-full p-8">
      <h1 className="header-1 text-center mb-8">{session.name}</h1>
      {renderedBookmarks}
    </div>
  );
});

export default PrintSession;
