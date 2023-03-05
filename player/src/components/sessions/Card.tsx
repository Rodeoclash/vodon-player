import { observer } from "mobx-react-lite";
import Session from "services/models/session";

import { Link } from "react-router-dom";
import TimeAgo from "components/ui/TimeAgo";
import Edit from "components/sessions/Edit";
import Delete from "components/sessions/Delete";

type Props = {
  session: Session;
};

const Card = observer(({ session }: Props) => {
  const createdAtDate = new Date(session.createdAt);

  return (
    <div className="flex flex-col bg-zinc-800">
      <div>
        <Link className="link" to={`/sessions/${session.id}/review`}>
          {session.videos[0] !== undefined &&
            session.videos[0].previewImageUrl !== null && (
              <img
                src={session.videos[0].previewImageUrl}
                className="w-full h-full object-contain"
              />
            )}
        </Link>
      </div>
      <div className="p-4 header-2 pb-0">
        <h2>
          <Link className="link" to={`/sessions/${session.id}/review`}>
            {session.name}
          </Link>
        </h2>
      </div>
      <div className="p-4 flex items-stretch">
        <div className="flex-grow">
          {createdAtDate.toLocaleDateString()}
          <span className="block text-sm text-white/50">
            <TimeAgo date={createdAtDate} />
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Edit session={session} />
          <Delete session={session} />
        </div>
      </div>
    </div>
  );
});

export default Card;
