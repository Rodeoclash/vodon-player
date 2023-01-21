import { useRouteLoaderData, Link } from "react-router-dom";

import type { SessionLoaderData } from "services/routes";

export default function ReviewSession() {
  const data = useRouteLoaderData("session") as SessionLoaderData;

  return (
    <div className="flex items-stretch w-full h-full">
      <div className="min-w-[16rem]">viewpoints</div>
      <div className="flex-grow">Main video</div>
      <div className="min-w-[32rem]">Notes</div>
    </div>
  );
}
