import { observer } from "mobx-react-lite";
import { useRouteLoaderData } from "react-router-dom";

import ReviewVideo from "components/sessions/ReviewVideo";
import ReviewVideoList from "components/sessions/ReviewVideoList";

import type { SessionLoaderData } from "services/routes";

const ReviewSession = observer(() => {
  const { session } = useRouteLoaderData("session") as SessionLoaderData;

  return (
    <div className="flex items-stretch w-full h-full">
      {session.hasVideos === true && (
        <div className="w-2/12 border-r border-stone-700 overflow-y-auto">
          <ReviewVideoList session={session} />
        </div>
      )}
      <div className="flex-grow relative">
        <ReviewVideo session={session} />
      </div>
      <div className="w-2/12 border-l border-stone-700">Notes</div>
    </div>
  );
});

export default ReviewSession;
