import React from "react";
import Video from "services/models/video";
import { requestLocalFileHandlePermission } from "services/videos";

type Props = {
  video: Video;
};

export default function RequestFileHandlePermission({ video }: Props) {
  const handleClick = React.useCallback(async () => {
    await requestLocalFileHandlePermission(video);
    // TODO: Trigger copy of file to OPFS
  }, [video]);

  if (video.localFileHandlePermission === "granted") {
    return null;
  }

  return (
    <button className="button" onClick={() => handleClick()}>
      Request permission
    </button>
  );
}
