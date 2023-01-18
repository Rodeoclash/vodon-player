import * as React from "react";
import { observer } from "mobx-react-lite";
import Video from "services/models/video";
import { removeVideo } from "services/videos";

type Props = {
  video: Video;
};

const Delete = observer(({ video }: Props) => {
  const handleClick = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (window.confirm("Remove this video?")) {
        removeVideo(video);
      }
    },
    [video]
  );

  return (
    <button
      className="block text-red-600"
      onClick={(event) => handleClick(event)}
    >
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
  );
});

export default Delete;
