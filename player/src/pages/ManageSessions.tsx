import List from "components/sessions/List";
import Create from "components/sessions/Create";
import Import from "components/sessions/Import";

export default function ManageSessions() {
  return (
    <div className="p-4">
      <h1 className="header-1">Your Sessions</h1>
      <div className="my-4">
        <List />
      </div>
      <div className="mt-4 flex items-center gap-4">
        <Import />
        <Create />
      </div>
    </div>
  );
}
