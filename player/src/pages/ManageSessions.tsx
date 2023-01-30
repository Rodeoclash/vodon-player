import List from "components/sessions/List";
import Create from "components/sessions/Create";

export default function ManageSessions() {
  return (
    <>
      <h1 className="header-1">Manage Sessions</h1>
      <List />
      <div className="mt-4">
        <Create />
      </div>
    </>
  );
}
