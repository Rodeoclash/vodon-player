import React from "react";
import Video from "services/models/video";
import { FormikProps, FormikValues } from "formik";

import { Formik } from "formik";

type Props = {
  innerRef: React.RefObject<FormikProps<FormikValues>>;
  video: Video;
  onSubmit: (values: FormikValues) => void;
};

const Form = ({ video, innerRef, onSubmit }: Props) => {
  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    formik: FormikProps<FormikValues>
  ) => {
    if (event.key === "Enter") {
      event.preventDefault();
      formik.submitForm();
    }
  };

  return (
    <>
      <Formik
        initialValues={{ name: video.name }}
        innerRef={innerRef}
        onSubmit={(values) => onSubmit(values)}
      >
        {(formik) => {
          return (
            <>
              <label htmlFor="name">Name</label>
              <input
                autoFocus
                className={"input"}
                id="name"
                name="name"
                onChange={formik.handleChange}
                type="name"
                value={formik.values.name}
                onKeyDown={(event) => handleKeyDown(event, formik)}
              />
            </>
          );
        }}
      </Formik>
    </>
  );
};

export default Form;
