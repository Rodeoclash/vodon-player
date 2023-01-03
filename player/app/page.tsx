import CreateSession from "components/sessions/Create";
import SessionList from "components/sessions/List";

export default function Page() {
  return (
    <>
      <div className="mb-4">
        <h1 className="header-1">Saved sessions</h1>
        <SessionList />
      </div>
      <div className="mb-4">
        <p>
          <CreateSession />
        </p>
      </div>
    </>
  );
}
