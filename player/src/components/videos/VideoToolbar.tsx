import * as React from "react";
import { observer } from "mobx-react-lite";
import Video from "services/models/video";
import { removeVideo } from "services/videos";

type Props = {
  video: Video;
};

const VideoToolbar = observer(({ video }: Props) => {
  const handleClickDelete = React.useCallback(() => {
    removeVideo(video);
  }, [video]);

  return (
    <div className="h-12 bg-black flex items-center">
      <h2 className="text-bright header-3 underline decoration-white/50 flex-grow">
        {video.name}
      </h2>
      <div className="text-red-600">
        <button className="block" onClick={() => handleClickDelete()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
});

export default VideoToolbar;
