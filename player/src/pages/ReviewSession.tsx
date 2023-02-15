import { observer } from "mobx-react-lite";
import { useRouteLoaderData } from "react-router-dom";
import bus from "services/bus";
import consola from "consola";
import { useHotkeys } from "react-hotkeys-hook";

import { Link } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

import AddBookmark from "components/videos/AddBookmark";
import BookmarkList from "components/videos/BookmarkList";
import ReviewVideo from "components/videos/ReviewVideo";
import ReviewVideoList from "components/sessions/ReviewVideoList";
import Tooltip from "components/ui/Tooltip";

import type { SessionLoaderData } from "services/routes";
import React from "react";

const ReviewSession = observer(() => {
  const [hideOverlays, setHideOverlays] = React.useState<boolean>(false);

  const { session } = useRouteLoaderData("session") as SessionLoaderData;
  const selectedVideo = session.selectedVideo;

  const handleToggleReviewVideosPanel = () => {
    session.toggleReviewVideoPanel();
  };

  const handleToggleBookmarksPanel = () => {
    session.toggleBookmarksPanel();
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

  const renderedCenterPanel = (() => {
    if (session.videos.length === 0) {
      return (
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-24 h-24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M12 18.75H4.5a2.25 2.25 0 01-2.25-2.25V9m12.841 9.091L16.5 19.5m-1.409-1.409c.407-.407.659-.97.659-1.591v-9a2.25 2.25 0 00-2.25-2.25h-9c-.621 0-1.184.252-1.591.659m12.182 12.182L2.909 5.909M1.5 4.5l1.409 1.409"
              />
            </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-24 h-24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </div>

          <p className="mt-4 text-bright max-w-prose">
            Select a video from the panel to get started
          </p>
        </div>
      );
    }

    return (
      <div className="w-full h-full relative">
        <ReviewVideo video={selectedVideo} hideOverlays={hideOverlays} />
        {hideOverlays === true && (
          <div className="absolute bottom-0 left-0 z-20">
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

  return (
    <div className="flex items-stretch w-full h-full">
      {session.hasVideos === true && session.showReviewVideoPanel === true && (
        <div className="w-96 border-r border-stone-700 overflow-y-auto shrink-0">
          <ReviewVideoList session={session} />
        </div>
      )}
      <div className="flex-grow relative relative">
        <button
          className="absolute top-0 left-0 z-10"
          onClick={() => handleToggleReviewVideosPanel()}
        >
          <Tooltip
            content={
              session.showReviewVideoPanel === true
                ? "Close view panel"
                : "Open video panel"
            }
          >
            <div className="w-12 h-12 p-2 bg-stone-800">
              {session.showReviewVideoPanel === true ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </div>
          </Tooltip>
        </button>
        {renderedCenterPanel}
        <button
          className="absolute top-0 right-0 z-10"
          onClick={() => handleToggleBookmarksPanel()}
        >
          <Tooltip
            content={
              session.showBookmarksPanel === true
                ? "Close bookmarks panel"
                : "Open bookmarks panel"
            }
          >
            <div className="w-12 h-12 p-2 bg-stone-800">
              {session.showBookmarksPanel === true ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </div>
          </Tooltip>
        </button>
      </div>
      {selectedVideo !== null && session.showBookmarksPanel === true && (
        <div className="w-96 border-l border-stone-700 overflow-y-auto shrink-0 flex flex-col">
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
