import * as React from "react";
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
  const [heroImageIndex, setHeroImageIndex] = React.useState<number>(0);
  const [active, setActive] = React.useState<boolean>(false);
  const createdAtDate = new Date(session.createdAt);

  const handleMouseEnter = () => {
    console.log("true");
    setActive(true);
  };

  const handleMouseLeave = () => {
    setActive(false);
    setHeroImageIndex(0);
  };

  React.useEffect(() => {
    if (active === false) {
      return;
    }

    const interval = setInterval(() => {
      setHeroImageIndex(
        heroImageIndex === session.videos.length - 1 ? 0 : heroImageIndex + 1
      );
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, [active, session, heroImageIndex]);

  const video = session.videos[heroImageIndex];

  return (
    <div
      className="flex flex-col bg-zinc-800"
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >
      <div>
        <Link className="link" to={`/sessions/${session.id}/review`}>
          {video !== undefined && video.previewImageUrl !== null && (
            <img
              src={video.previewImageUrl}
              className="w-full h-full object-contain"
            />
          )}
        </Link>
      </div>
      <div className="p-4 header-3 pb-0">
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
