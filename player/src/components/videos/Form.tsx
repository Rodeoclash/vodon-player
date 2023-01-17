import Video from "services/models/video";

import { useFormik } from "formik";

type Props = {
  video: Video;
};

const Form = ({ video }: Props) => {
  const formik = useFormik({
    initialValues: {
      name: video.name,
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Player name</label>
      <input
        id="name"
        name="name"
        type="name"
        onChange={formik.handleChange}
        value={formik.values.name}
        className={"input"}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
