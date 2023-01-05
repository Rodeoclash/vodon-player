import SessionList from "components/sessions/SessionList";
import SessionCreate from "components/sessions/SessionCreate";

export default function ManageSessions() {
  return (
    <>
      <h1 className="header-1">Manage Sessions</h1>
      <SessionList />
      <div className="mt-4">
        <SessionCreate />
      </div>
    </>
  );
}
