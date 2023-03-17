import { observer } from "mobx-react-lite";
import Video from "services/models/video";
import { TbAlertCircle } from "react-icons/tb";
import fileHandles from "services/file_handles";
import { MissingLocalFileHandle } from "services/errors";

type Props = {
  video: Video;
};

const ReviewVideoRequestPermission = observer(({ video }: Props) => {
  const style = { aspectRatio: `${video.width}/${video.height}` };

  const handleClick = async () => {
    const result = await fileHandles
      .table("videoFileHandlesLocal")
      .get({ id: video.id });

    if (result === undefined) {
      throw new MissingLocalFileHandle(
        "Tried to restore permission on local file handle but it was not found"
      );
    }

    if (
      (await result.fileHandle.requestPermission({
        mode: "read",
      })) === "granted"
    ) {
      console.log("=== FOUND THIS");
      video.localFileHandlePermission = "granted";
    }
  };

  return (
    <div style={style} className="relative bg-zinc-800">
      <div className="absolute top-0 left-0 bg-black/70 px-2 z-30">
        <h3>
          {video.index + 1}. {video.name}
        </h3>
      </div>
      <div className="absolute inset-0 flex items-center justify-center italic text-white/50 z-20 bg-zinc-800">
        <div className="flex flex-col items-center">
          <TbAlertCircle size={48} />
          <p className="mt-2 mb-4">Video requires permissions</p>
          <button className="btn btn-primary" onClick={() => handleClick()}>
            Restore
          </button>
        </div>
      </div>
    </div>
  );
});

export default ReviewVideoRequestPermission;
