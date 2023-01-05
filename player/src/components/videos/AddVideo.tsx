"use client";

import React from "react";
import { RootStoreContext } from "services/models/root";
import Session from "services/models/session";
import Video from "services/models/video";
import {
  updateLocalFileHandleExists,
  updateLocalFileHandlePermission,
} from "services/videos";
import { setFileHandle } from "services/local_files";

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

    const video = new Video({
      name: fileHandle.name,
    });

    session.addVideo(video);

    try {
      await setFileHandle(video, fileHandle);
    } catch (error) {
      console.error("Failed to set local file handle exists, error was", error);
    }

    await updateLocalFileHandleExists(video);
    await updateLocalFileHandlePermission(video);
    // TODO: Trigger copy of file to OPFS
  };

  return (
    <div>
      <button onClick={() => handleClick()} className="button">
        Click to select video
      </button>
    </div>
  );
}
