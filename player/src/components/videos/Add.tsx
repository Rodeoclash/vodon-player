"use client";

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

const Add = ({ session }: Props) => {
  const handleClick = async (): Promise<Video> => {
    const [fileHandle] = await window.showOpenFilePicker(pickerOpts);
    const video = await createVideoInSession(session, fileHandle);
    return video;
  };

  return (
    <div>
      <button onClick={() => handleClick()} className="button">
        Add video
      </button>
    </div>
  );
};

export default Add;
