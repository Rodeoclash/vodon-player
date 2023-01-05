import { useRouteLoaderData } from "react-router-dom";
import AddVideo from "components/videos/AddVideo";
import ListVideosInSession from "components/videos/ListVideosInSession";

import type { SessionLoaderData } from "services/routes";

export default function SetupSessions() {
  const data = useRouteLoaderData("session") as SessionLoaderData;

  return (
    <>
      <h1 className="header-1">Setup Session</h1>
      <ListVideosInSession session={data.session} />
      <AddVideo session={data.session} />
    </>
  );
}
