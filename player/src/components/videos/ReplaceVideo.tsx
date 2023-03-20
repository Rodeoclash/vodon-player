import { observer } from "mobx-react-lite";
import Video from "services/models/video";
import { TbAlertCircle } from "react-icons/tb";
import { replace } from "services/videos";
import { pickerOpts } from "services/videos";

type Props = {
  video: Video;
};

const extendedPickerOpts = {
  ...pickerOpts,
  multiple: false,
};

const ReplaceVideo = observer(({ video }: Props) => {
  const style = { aspectRatio: `${video.width}/${video.height}` };

  const handleClick = async () => {
    const fileHandle = await window.showOpenFilePicker(extendedPickerOpts);
    replace(video, fileHandle[0]);
  };

  return (
    <div style={style} className="relative bg-zinc-800">
      <div className="absolute top-0 left-0 bg-black/70 px-2 z-30">
        <h3>
          {video.index + 1}. {video.name}
        </h3>
      </div>
      <div className="absolute inset-0 flex items-center justify-center italic z-20 bg-zinc-800">
        <div className="flex flex-col items-center">
          <TbAlertCircle size={48} />
          <p className="mt-2 mb-4">Could not find local video!</p>
          <button className="btn btn-primary" onClick={() => handleClick()}>
            Replace video
          </button>
        </div>
      </div>
    </div>
  );
});

export default ReplaceVideo;
