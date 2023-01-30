import Bookmark from "services/models/bookmark";
import Editor from "components/ui/Editor";

type Props = {
  bookmark: Bookmark;
};

const CreatePage = ({}: Props) => {
  return (
    <div>
      <Editor />
    </div>
  );
};

export default CreatePage;
