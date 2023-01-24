import * as React from "react";
import { observer } from "mobx-react-lite";
import Video from "services/models/video";
import { FormikProps, FormikValues } from "formik";

import Modal from "components/ui/Modal";
import ModalHeader from "components/ui/ModalHeader";
import ModalBody from "components/ui/ModalBody";
import ModalControls from "components/ui/ModalControls";
import Form from "components/videos/Form";

type Props = {
  video: Video;
};

const Edit = observer(({ video }: Props) => {
  const formRef = React.useRef<FormikProps<FormikValues>>(null);
  const [editVideoOpen, setEditVideoOpen] = React.useState<boolean>(false);

  const handleClickEdit = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      setEditVideoOpen(true);
    },
    []
  );

  const handleRequestClose = React.useCallback(() => {
    setEditVideoOpen(false);
  }, []);

  const handleRequestSave = React.useCallback(() => {
    if (formRef.current) {
      formRef.current.handleSubmit();
    }
  }, []);

  const handleSubmit = React.useCallback((values: FormikValues) => {
    video.setName(values.name);
    setEditVideoOpen(false);
  }, []);

  return (
    <>
      <button
        className="text-bright flex items-center gap-2"
        onClick={(event) => handleClickEdit(event)}
      >
        <h2 className="header-3 underline decoration-white/50 text-bright">
          {video.name}
        </h2>
      </button>

      <Modal
        isOpen={editVideoOpen === true}
        onRequestClose={() => handleRequestClose()}
      >
        <ModalHeader>
          <h2 className="header-2">Edit video</h2>
        </ModalHeader>
        <ModalBody>
          <Form
            innerRef={formRef}
            video={video}
            onSubmit={(values) => handleSubmit(values)}
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
              onClick={() => handleRequestSave()}
              type="submit"
            >
              Save
            </button>
          </div>
        </ModalControls>
      </Modal>
    </>
  );
});

export default Edit;
