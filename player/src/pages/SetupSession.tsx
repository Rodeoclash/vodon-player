import { useRouteLoaderData } from "react-router-dom";
import Add from "components/videos/Add";
import SetupVideoList from "components/sessions/SetupVideoList";

import type { SessionLoaderData } from "services/routes";

export default function SetupSessions() {
  const data = useRouteLoaderData("session") as SessionLoaderData;

  return (
    <div className="flex items-stretch w-full h-full">
      <div className="flex-grow relative">
        <div className="grid grid-cols-2 gap-1">
          <SetupVideoList session={data.session} />
          <Add session={data.session} />
        </div>
      </div>
      <div className="w-2/12 border-l border-stone-700 p-4">
        <h1 className="header-1 mb-4">Getting started</h1>
        <p className="paragraph">
          Configure the following videos to be the same moment in time
        </p>
      </div>
    </div>
  );
}
