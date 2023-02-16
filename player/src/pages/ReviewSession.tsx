import { observer } from "mobx-react-lite";
import { useRouteLoaderData } from "react-router-dom";
import bus from "services/bus";
import consola from "consola";
import { useHotkeys } from "react-hotkeys-hook";

import { Link } from "react-router-dom";
import {
  TbChevronLeft,
  TbChevronRight,
  TbArrowLeft,
  TbVideoOff,
} from "react-icons/tb";

import AddBookmark from "components/videos/AddBookmark";
import BookmarkList from "components/videos/BookmarkList";
import ReviewVideo from "components/videos/ReviewVideo";
import ReviewVideoList from "components/sessions/ReviewVideoList";
import Tooltip from "components/ui/Tooltip";

import type { SessionLoaderData } from "services/routes";
import React from "react";

const sidePanelWidth = 384;

const ReviewSession = observer(() => {
  const fullscreenTargetRef = React.useRef<HTMLDivElement>(null);

  const [hideOverlays, setHideOverlays] = React.useState<boolean>(false);
  const [availableVideoWidth, setAvailableVideoWidth] = React.useState<
    number | null
  >(null);

  const { session } = useRouteLoaderData("session") as SessionLoaderData;
  const selectedVideo = session.selectedVideo;

  const handleToggleReviewVideosPanel = () => {
    session.toggleReviewVideoPanel();
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 0);
  };

  const handleToggleBookmarksPanel = () => {
    session.toggleBookmarksPanel();
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 0);
  };

  const handleEnableOverlays = () => {
    setHideOverlays(false);
  };

  useHotkeys(
    "h",
    () => {
      setHideOverlays(!hideOverlays);
    },
    [hideOverlays]
  );

  useHotkeys(
    "f",
    () => {
      if (!document.fullscreenElement && fullscreenTargetRef.current !== null) {
        fullscreenTargetRef.current.requestFullscreen();
      } else if (document.exitFullscreen) {
        document.exitFullscreen();
        window.dispatchEvent(new Event("resize"));
      }
    },
    []
  );

  // When loading the page, trigger a video realignment as the offsets may have
  // been adjusted in the setup page.
  React.useEffect(() => {
    if (selectedVideo !== null) {
      consola.info(
        "Detected review page loaded, trigger video time synchronisation"
      );
      bus.emit("video.gotoTime", selectedVideo, selectedVideo.currentTime);
    }
  }, []);

  React.useLayoutEffect(() => {
    const handleResize = () => {
      const reviewVideoPanelWidth = (() => {
        if (selectedVideo === null || session.showReviewVideoPanel === false) {
          return 0;
        }

        return sidePanelWidth;
      })();

      const bookmarkPanelWidth = (() => {
        if (selectedVideo === null || session.showBookmarksPanel === false) {
          return 0;
        }

        return sidePanelWidth;
      })();

      setAvailableVideoWidth(
        window.screen.width - reviewVideoPanelWidth - bookmarkPanelWidth
      );
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [selectedVideo]);

  const renderedCenterPanel = (() => {
    if (session.videos.length === 0) {
      return (
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="opacity-50">
            <TbVideoOff size={150} />
          </div>
          <h2 className="header-2 mb-2">{session.name} has no videos!</h2>
          <p className="paragraph text-white/50">
            <Link to={`/sessions/${session.id}/setup`} className="link">
              Setup your videos
            </Link>{" "}
            to get started
          </p>
        </div>
      );
    }

    if (selectedVideo === null) {
      return (
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="opacity-50">
            <TbArrowLeft size={150} />
          </div>

          <p className="mt-4 text-bright max-w-prose">
            Select a video from the panel to get started
          </p>
        </div>
      );
    }

    return (
      <div ref={fullscreenTargetRef} className="w-full h-full relative">
        <ReviewVideo video={selectedVideo} hideOverlays={hideOverlays} />
        {hideOverlays === true && (
          <div className="absolute bottom-0 left-0 z-10">
            <button
              className="bg-red-700 p-1 text-sm"
              onClick={() => handleEnableOverlays()}
            >
              REENABLE OVERLAYS
            </button>
          </div>
        )}
      </div>
    );
  })();

  const reviewVideoListStyle = {
    width: sidePanelWidth,
  };

  const videoStyle = {
    maxWidth: `${availableVideoWidth}px`,
  };

  const bookmarkPanelStyle = {
    width: sidePanelWidth,
  };

  return (
    <div className="flex items-stretch w-full h-full">
      {session.hasVideos === true && session.showReviewVideoPanel === true && (
        <div
          className="border-r border-stone-700 overflow-y-auto shrink-0"
          style={reviewVideoListStyle}
        >
          <ReviewVideoList session={session} />
        </div>
      )}
      <div className="flex-grow relative" style={videoStyle}>
        {selectedVideo !== null && (
          <button
            className="absolute top-0 left-0 z-30"
            onClick={() => handleToggleReviewVideosPanel()}
          >
            <Tooltip
              content={
                session.showReviewVideoPanel === true
                  ? "Close view panel"
                  : "Open video panel"
              }
            >
              <div className="w-12 h-12 p-2 bg-stone-800 flex items-center justify-center">
                {session.showReviewVideoPanel === true ? (
                  <TbChevronLeft />
                ) : (
                  <TbChevronRight />
                )}
              </div>
            </Tooltip>
          </button>
        )}
        {renderedCenterPanel}
        {selectedVideo !== null && (
          <button
            className="absolute top-0 right-0 z-30"
            onClick={() => handleToggleBookmarksPanel()}
          >
            <Tooltip
              content={
                session.showBookmarksPanel === true
                  ? "Close bookmarks panel"
                  : "Open bookmarks panel"
              }
            >
              <div className="w-12 h-12 p-2 bg-stone-800 flex items-center justify-center">
                {session.showBookmarksPanel === true ? (
                  <TbChevronRight />
                ) : (
                  <TbChevronLeft />
                )}
              </div>
            </Tooltip>
          </button>
        )}
      </div>
      {selectedVideo !== null && session.showBookmarksPanel === true && (
        <div
          className="border-l border-stone-700 overflow-y-auto shrink-0 flex flex-col"
          style={bookmarkPanelStyle}
        >
          <div className="flex-grow overflow-y-auto">
            <BookmarkList video={selectedVideo} />
          </div>
          <div className="border-t border-stone-700 p-4">
            <AddBookmark video={selectedVideo} />
          </div>
        </div>
      )}
    </div>
  );
});

export default ReviewSession;
