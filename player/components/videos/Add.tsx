"use client";

import React from "react";
import { RootStoreContext } from "services/models/root";
import { Session } from "services/models/session";
import { Video } from "services/models/video";

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

export default function Component({ session }: Props) {
  const store = React.useContext(RootStoreContext);

  const handleClick = async () => {
    const [fileHandle] = await window.showOpenFilePicker(pickerOpts);
    session.addVideo(new Video({ name: fileHandle.name, session }));
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
