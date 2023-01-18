import * as React from "react";
import { observer } from "mobx-react-lite";
import Video from "services/models/video";
import { secondsToHms } from "services/time";

import Modal from "components/ui/Modal";

type Props = {
  video: Video;
};

const Information = observer(({ video }: Props) => {
  const [informationOpen, setInformationOpen] = React.useState<boolean>(false);

  const handleClick = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      setInformationOpen(true);
    },
    [video]
  );

  const handleRequestClose = React.useCallback(() => {
    setInformationOpen(false);
  }, [video]);

  return (
    <>
      <button
        className="block text-bright"
        onClick={(event) => handleClick(event)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
          />
        </svg>
      </button>
      <Modal
        isOpen={informationOpen}
        onRequestClose={() => handleRequestClose()}
      >
        <h2 className="header-2 mb-4">Video information</h2>
        <dl>
          <dt>Name</dt>
          <dd>{video.name}</dd>
          <dt>Type</dt>
          <dd>{video.type}</dd>
          <dt>Duration</dt>
          <dd>{secondsToHms(video.duration)}</dd>
          <dt>Offset</dt>
          <dd>{secondsToHms(video.offset)}</dd>
          <dt>Calculated offset</dt>
          <dd>{video.calculatedOffset}</dd>
          <dt>Width</dt>
          <dd>{video.width}</dd>
          <dt>Height</dt>
          <dd>{video.height}</dd>
          <dt>Framerate</dt>
          <dd>{video.frameRate}</dd>
        </dl>
        <div className="flex items-center gap-4 mt-4">
          <button
            className="btn btn-primary"
            onClick={() => handleRequestClose()}
            type="submit"
          >
            Close
          </button>
        </div>
      </Modal>
    </>
  );
});

export default Information;
