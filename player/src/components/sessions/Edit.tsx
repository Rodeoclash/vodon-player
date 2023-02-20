import React from "react";
import { useNavigate } from "react-router-dom";
import Session from "services/models/session";
import { RootStoreContext } from "services/models/root";
import { FormikProps, FormikValues } from "formik";
import { observer } from "mobx-react-lite";

import Modal from "components/ui/Modal";
import ModalHeader from "components/ui/ModalHeader";
import ModalBody from "components/ui/ModalBody";
import ModalControls from "components/ui/ModalControls";
import Form from "components/sessions/Form";

type Props = {
  session: Session;
};

const Edit = observer(({ session }: Props) => {
  const formRef = React.useRef<FormikProps<FormikValues>>(null);
  const [open, setOpen] = React.useState<boolean>(false);

  const handleRequestClose = () => {
    setOpen(false);
  };

  const handleRequestUpdate = () => {
    if (formRef.current) {
      formRef.current.handleSubmit();
    }
  };

  const handleSubmit = (values: FormikValues) => {
    session.update(values);
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const initialValues = {
    name: session.name,
  };

  return (
    <>
      <button className="btn btn-primary" onClick={() => handleClick()}>
        Edit
      </button>
      <Modal isOpen={open === true} onRequestClose={() => handleRequestClose()}>
        <ModalHeader>
          <h2 className="header-2">Update session</h2>
        </ModalHeader>
        <ModalBody>
          <Form
            innerRef={formRef}
            onSubmit={(values) => handleSubmit(values)}
            initialValues={initialValues}
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
              onClick={() => handleRequestUpdate()}
              type="submit"
            >
              Update
            </button>
          </div>
        </ModalControls>
      </Modal>
    </>
  );
});

export default Edit;
