import { useRouteLoaderData } from "react-router-dom";
import AddVideo from "components/videos/AddVideo";
import VideoList from "components/videos/VideoList";

import type { SessionLoaderData } from "services/routes";

export default function SetupSessions() {
  const data = useRouteLoaderData("session") as SessionLoaderData;

  return (
    <>
      <h1 className="header-1">Setup Session</h1>
      <VideoList session={data.session} />
      <AddVideo session={data.session} />
    </>
  );
}
