"use client";

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

const Create = observer(() => {
  const formRef = React.useRef<FormikProps<FormikValues>>(null);
  const store = React.useContext(RootStoreContext);
  const [open, setOpen] = React.useState<boolean>(false);
  const navigate = useNavigate();

  const handleRequestClose = () => {
    setOpen(false);
  };

  const handleRequestCreate = () => {
    if (formRef.current) {
      formRef.current.handleSubmit();
    }
  };

  const handleSubmit = (values: FormikValues) => {
    const session = new Session({
      name: values.name,
      selectedVideoRef: null,
    });

    setOpen(false);
    store.addSession(session);
    navigate(`/sessions/${session.id}/setup`);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const initialValues = {
    name: `Session #${store.sessionsCount + 1}`,
  };

  return (
    <>
      <button className="btn btn-primary" onClick={() => handleClick()}>
        Create new session
      </button>
      <Modal isOpen={open === true} onRequestClose={() => handleRequestClose()}>
        <ModalHeader>
          <h2 className="header-2">Create session</h2>
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

export default Create;
