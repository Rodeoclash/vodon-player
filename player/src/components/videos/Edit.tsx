import * as React from "react";
import { observer } from "mobx-react-lite";
import Video from "services/models/video";
import { FormikProps, FormikValues } from "formik";

import Modal from "components/ui/Modal";
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
    [video]
  );

  const handleRequestClose = React.useCallback(() => {
    video.setRunFirstSetup(true);
    setEditVideoOpen(false);
  }, [video]);

  const handleRequestSave = React.useCallback(() => {
    if (formRef.current) {
      formRef.current.handleSubmit();
    }
  }, [video]);

  const handleSubmit = React.useCallback(
    (values: FormikValues) => {
      video.setName(values.name);
      video.setRunFirstSetup(true);
      setEditVideoOpen(false);
    },
    [video]
  );

  return (
    <>
      <button
        className="text-bright flex items-center gap-2"
        onClick={(event) => handleClickEdit(event)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>
        <h2 className="header-3 underline decoration-white/50 text-bright">
          {video.name}
        </h2>
      </button>

      <Modal
        isOpen={editVideoOpen || video.runFirstSetup === false}
        onRequestClose={() => handleRequestClose()}
      >
        <h2 className="header-2 mb-4">Edit video</h2>
        <Form
          innerRef={formRef}
          video={video}
          onSubmit={(values) => handleSubmit(values)}
        />
        <div className="flex items-center gap-4 mt-4">
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
      </Modal>
    </>
  );
});

export default Edit;
