import Session from "services/models/session";
import { observer } from "mobx-react-lite";
import { remove } from "services/videos";

type Props = {
  session: Session;
};

const Delete = observer(({ session }: Props) => {
  const handleClick = () => {
    if (window.confirm("Remove this session?")) {
      session.videos.forEach((video) => {
        remove(video);
      });

      session.delete();
    }
  };

  return (
    <button className="btn btn-primary" onClick={() => handleClick()}>
      Delete
    </button>
  );
});

export default Delete;
