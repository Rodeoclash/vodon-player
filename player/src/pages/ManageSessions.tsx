import List from "components/sessions/List";
import Create from "components/sessions/Create";
import Import from "components/sessions/Import";

export default function ManageSessions() {
  return (
    <>
      <h1 className="header-1">Manage Sessions</h1>
      <List />
      <div className="mt-4 flex items-center gap-4">
        <Import />
        <Create />
      </div>
    </>
  );
}
