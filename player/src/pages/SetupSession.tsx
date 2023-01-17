import { useRouteLoaderData } from "react-router-dom";
import Add from "components/videos/Add";
import SetupList from "components/videos/SetupList";

import type { SessionLoaderData } from "services/routes";

export default function SetupSessions() {
  const data = useRouteLoaderData("session") as SessionLoaderData;

  return (
    <>
      <h1 className="header-1">Setup Session</h1>
      <div className="grid grid-cols-3 gap-4">
        <SetupList session={data.session} />
        <Add session={data.session} />
      </div>
    </>
  );
}
