import { observer } from "mobx-react-lite";
import PQueue from "p-queue";
import Session from "services/models/session";
import { createVideoInSession } from "services/videos";

const pickerOpts = {
  types: [
    {
      description: "Videos",
      accept: {
        "video/*": [".mp4", ".webm", ".mkv"],
      },
    },
  ],
  excludeAcceptAllOption: true,
  multiple: true,
};

type Props = {
  session: Session;
};

const Add = observer(({ session }: Props) => {
  const handleClick = async () => {
    const queue = new PQueue({ concurrency: 1 });
    const fileHandles = await window.showOpenFilePicker(pickerOpts);

    fileHandles.forEach(async (fileHandle) => {
      await queue.add(() => createVideoInSession(session, fileHandle));
    });
  };

  return (
    <div
      className="aspect-video flex flex-col items-center justify-center bg-stone-800 cursor-pointer"
      onClick={() => handleClick()}
    >
      {session.hasVideos === false && (
        <p className="paragraph mb-4">
          You currently have no videos in your review session
        </p>
      )}
      <button className="btn btn-primary">Add video</button>
    </div>
  );
});

export default Add;
