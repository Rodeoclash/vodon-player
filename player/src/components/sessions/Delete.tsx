import Session from "services/models/session";
import { observer } from "mobx-react-lite";

type Props = {
  session: Session;
};

const Delete = observer(({ session }: Props) => {
  const handleClick = () => {
    if (window.confirm("Remove this session?")) {
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
