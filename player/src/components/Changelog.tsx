import * as React from "react";
import { observer } from "mobx-react-lite";
import { RootStoreContext } from "services/models/root";
import changelog from "../../CHANGELOG.md?raw";

import ReactMarkdown from "react-markdown";
import Modal from "components/ui/Modal";
import ModalHeader from "components/ui/ModalHeader";
import ModalBody from "components/ui/ModalBody";
import ModalControls from "components/ui/ModalControls";

const Changelog = observer(() => {
  const store = React.useContext(RootStoreContext);

  const handleRequestClose = () => {
    store.setLatestChangelogReadHash(changelog.length);
  };

  const isOpen =
    store.latestChangelogReadHash === null ||
    store.latestChangelogReadHash !== changelog.length;

  if (isOpen === false) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={() => handleRequestClose()}>
      <ModalHeader>
        <h2 className="header-2">Latest changes</h2>
      </ModalHeader>
      <ModalBody>
        <div className="max-w-prose prose prose-invert">
          <ReactMarkdown>{changelog}</ReactMarkdown>
        </div>
      </ModalBody>
      <ModalControls>
        <div className="flex items-center justify-end gap-4">
          <button
            className="btn btn-primary"
            onClick={() => handleRequestClose()}
            type="submit"
          >
            Close
          </button>
        </div>
      </ModalControls>
    </Modal>
  );
});

export default Changelog;
