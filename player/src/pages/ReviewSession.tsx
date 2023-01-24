import { useRouteLoaderData } from "react-router-dom";

import ReviewVideo from "components/sessions/ReviewVideo";
import ReviewVideoList from "components/sessions/ReviewVideoList";

import type { SessionLoaderData } from "services/routes";

export default function ReviewSession() {
  const data = useRouteLoaderData("session") as SessionLoaderData;

  return (
    <div className="flex items-stretch w-full h-full">
      <div className="w-2/12 border-r border-stone-700">
        <ReviewVideoList session={data.session} />
      </div>
      <div className="flex-grow relative">
        <ReviewVideo session={data.session} />
      </div>
      <div className="w-2/12 border-l border-stone-700">Notes</div>
    </div>
  );
}
