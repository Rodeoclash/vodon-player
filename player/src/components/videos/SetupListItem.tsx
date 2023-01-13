import * as React from "react";
import { observer } from "mobx-react-lite";
import Video from "services/models/video";
import VideoControls from "components/ui/VideoControls";

type Props = {
  video: Video;
};

const SetupList = observer(({ video }: Props) => {
  const containerEl = React.useRef<null | HTMLDivElement>(null);

  // Once the local file handle is present, append it to the player
  React.useEffect(() => {
    if (containerEl.current === null || video.setupVideoEl === null) {
      return;
    }

    containerEl.current.appendChild(video.setupVideoEl);
  }, [video.videoElementsCreated]);

  // TODO: This will need to show any loading progress etc
  if (
    video.videoElementsCreated === false ||
    video.videoElementsCreated === null
  ) {
    return <p>Setup video element not yet created</p>;
  }

  return (
    <div className="relative">
      <div ref={containerEl} />
      <div className="absolute left-0 right-0 bottom-0">
        <VideoControls />
      </div>
    </div>
  );
});

export default SetupList;
