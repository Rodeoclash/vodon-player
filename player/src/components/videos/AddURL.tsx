import * as React from "react";
import { observer } from "mobx-react-lite";
import Session from "services/models/session";
import { createRemoteVideoInSession } from "services/videos";
import Modal from "components/ui/Modal";
import ModalHeader from "components/ui/ModalHeader";
import ModalBody from "components/ui/ModalBody";
import ModalControls from "components/ui/ModalControls";

type Props = {
  session: Session;
};

const AddURL = observer(({ session }: Props) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [url, setUrl] = React.useState<string>("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleRequestClose = () => {
    setOpen(false);
    setUrl("");
  };

  const handleURLChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const handleRequestCreate = () => {
    if (url === "") {
      return;
    }

    createRemoteVideoInSession(session, url);
  };

  return (
    <>
      <button className="btn btn-primary" onClick={() => handleClickOpen()}>
        Add from URL
      </button>
      <Modal isOpen={open === true} onRequestClose={() => handleRequestClose()}>
        <ModalHeader>
          <h2 className="header-2">Add from URL</h2>
        </ModalHeader>
        <ModalBody>
          <p className="paragraph">Enter the URL of where your video is:</p>
          <input
            type="url"
            className="input"
            autoFocus
            value={url}
            onChange={(event) => handleURLChange(event)}
          />
        </ModalBody>
        <ModalControls>
          <div className="flex items-center justify-end gap-4">
            <button
              className="btn btn-secondary"
              onClick={() => handleRequestClose()}
            >
              Cancel
            </button>
            <button
              className="btn btn-primary"
              onClick={() => handleRequestCreate()}
              type="submit"
            >
              Create
            </button>
          </div>
        </ModalControls>
      </Modal>
    </>
  );
});

export default AddURL;
