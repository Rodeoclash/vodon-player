type Props = {
  duration: number;
  currentTime: number;
  onPause: () => void;
  onPlay: () => void;
  showPause: boolean;
  showPlay: boolean;
};

const VideoControls = ({
  showPause,
  showPlay,
  onPlay,
  onPause,
  currentTime,
  duration,
}: Props) => {
  return (
    <div className="relative h-14">
      <div className="absolute top-0 left-0 right-0 bottom-0 z-20 flex items-center p-2">
        {showPlay && (
          <button className="videoControl" onClick={() => onPlay()}>
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
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
              />
            </svg>
          </button>
        )}
        {showPause && (
          <button className="videoControl" onClick={() => onPause()}>
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
                d="M15.75 5.25v13.5m-7.5-13.5v13.5"
              />
            </svg>
          </button>
        )}
        <div className="text-white">
          {Math.round(currentTime)} / {Math.round(duration)}
        </div>
        <button className="videoControl">
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
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <div className="flex-grow">Progress</div>
        <button className="videoControl">
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
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 z-10 bg-gray-800 bg-opacity-60 backdrop-filter backdrop-blur-sm" />
    </div>
  );
};

export default VideoControls;
