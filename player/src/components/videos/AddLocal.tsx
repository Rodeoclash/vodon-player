import { observer } from "mobx-react-lite";
import PQueue from "p-queue";
import Session from "services/models/session";
import { createLocalVideoInSession } from "services/videos";

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

const AddLocal = observer(({ session }: Props) => {
  const handleClick = async () => {
    const queue = new PQueue({ concurrency: 1 });
    const fileHandles = await window.showOpenFilePicker(pickerOpts);

    fileHandles.forEach(async (fileHandle) => {
      await queue.add(() => createLocalVideoInSession(session, fileHandle));
    });
  };

  return (
    <button className="btn btn-primary" onClick={() => handleClick()}>
      Add local video
    </button>
  );
});

export default AddLocal;
