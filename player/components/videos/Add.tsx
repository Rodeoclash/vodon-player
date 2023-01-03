"use client";

import store from "services/data/stores/root";
import { ISession } from "services/data/types/session";

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
  session: ISession;
};

export default function Component({ session }: Props) {
  const handleClick = async () => {
    const [fileHandle] = await window.showOpenFilePicker(pickerOpts);
    store.addVideoToSession({ name: fileHandle.name, session });
  };

  return (
    <div
      onClick={() => handleClick()}
      className="border border-black/30 p-4 cursor-pointer"
    >
      Click to select video
    </div>
  );
}
