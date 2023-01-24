import { observer } from "mobx-react-lite";
import Session from "services/models/session";
import Video from "services/models/video";
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
  multiple: false,
};

type Props = {
  session: Session;
};

const Add = observer(({ session }: Props) => {
  const handleClick = async (): Promise<Video> => {
    const [fileHandle] = await window.showOpenFilePicker(pickerOpts);
    const video = await createVideoInSession(session, fileHandle);
    return video;
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
