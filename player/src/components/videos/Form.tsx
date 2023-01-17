import Video from "services/models/video";
import { FormikProps, FormikValues } from "formik";

import { Formik } from "formik";

type Props = {
  innerRef: React.RefObject<FormikProps<FormikValues>>;
  video: Video;
  onSubmit: (values: FormikValues) => void;
};

const Form = ({ video, innerRef, onSubmit }: Props) => {
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
                id="name"
                name="name"
                type="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                className={"input"}
              />
            </>
          );
        }}
      </Formik>
    </>
  );
};

export default Form;
