type Props = {};

const VideoControls = ({}: Props) => {
  return (
    <div className="flex">
      <button>Play</button>
      <button>Pause</button>
      <button>Frame back</button>
      <div>Progress</div>
      <button>Frame forward</button>
    </div>
  );
};

export default VideoControls;
