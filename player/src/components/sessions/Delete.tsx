import Session from "services/models/session";
import { observer } from "mobx-react-lite";
import { remove as removeSession } from "services/sessions";

type Props = {
  session: Session;
};

const Delete = observer(({ session }: Props) => {
  const handleClick = () => {
    if (window.confirm("Remove this session?")) {
      removeSession(session);
    }
  };

  return (
    <button className="btn btn-primary" onClick={() => handleClick()}>
      Delete
    </button>
  );
});

export default Delete;
