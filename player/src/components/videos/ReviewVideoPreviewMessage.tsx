import { observer } from "mobx-react-lite";
import { secondsToHms } from "services/time";
import Video from "services/models/video";
import { UnknownMessage } from "services/errors";

export enum MessageKind {
  Playing,
  BeforeRange,
  AfterRange,
}

type Props = {
  video: Video;
  messageKind: MessageKind;
};

const ReviewVideoPreview = observer(({ video, messageKind }: Props) => {
  const style = { aspectRatio: `${video.width}/${video.height}` };

  const renderedMessage = (() => {
    if (video.session.currentTime === null) {
      return null;
    }

    // We can't display the video in two places, so set a message instead here
    if (messageKind === MessageKind.Playing) {
      return "Playing in main window";
    }

    // Show when the video will start,
    if (messageKind === MessageKind.BeforeRange) {
      return `Video starts in ${secondsToHms(
        Math.round(video.beginsAt) - Math.round(video.session.currentTime)
      )}`;
    }

    // Display how long ago the video finished
    if (messageKind === MessageKind.AfterRange) {
      return `Video finished at ${secondsToHms(Math.round(video.finishesAt))}`;
    }

    throw new UnknownMessage(
      "A message was given to the preview video to display but it was an unknown type"
    );
  })();

  return (
    <div style={style} className="relative bg-zinc-800">
      <div className="absolute top-0 left-0 bg-black/70 px-2 z-30">
        <h3>
          {video.index + 1}. {video.name}
        </h3>
      </div>
      {renderedMessage !== null && (
        <div className="absolute inset-0 flex items-center justify-center italic text-white/50 z-20 bg-zinc-800">
          {renderedMessage}
        </div>
      )}
    </div>
  );
});

export default ReviewVideoPreview;
