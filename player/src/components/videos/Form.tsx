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
  const handleFocusName = (
    event: React.FocusEvent<HTMLInputElement, Element>
  ) => {
    event.target.select();
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
                onFocus={(event) => handleFocusName(event)}
              />
            </>
          );
        }}
      </Formik>
    </>
  );
};

export default Form;
