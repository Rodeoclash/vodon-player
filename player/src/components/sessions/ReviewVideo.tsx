import * as React from "react";
import { observer } from "mobx-react-lite";
import Session from "services/models/session";
import { Link } from "react-router-dom";

type Props = {
  session: Session;
};

const ReviewVideo = observer(({ session }: Props) => {
  const containerEl = React.useRef<null | HTMLDivElement>(null);
  const selectedVideo = session.selectedVideo;

  React.useEffect(() => {
    if (
      selectedVideo === null ||
      containerEl.current === null ||
      selectedVideo.reviewVideoEl === null
    ) {
      return;
    }

    containerEl.current.appendChild(selectedVideo.reviewVideoEl);
  }, [selectedVideo]);

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
        <h2 className="header-2 mb-2">No videos!</h2>
        <p className="paragraph text-white/50">
          Please{" "}
          <Link to={`/sessions/${session.id}/setup`} className="link">
            setup your videos
          </Link>{" "}
          first
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

  return <div ref={containerEl} className="w-full" />;
});

export default ReviewVideo;
