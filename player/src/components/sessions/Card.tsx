import * as React from "react";
import { observer } from "mobx-react-lite";
import Session from "services/models/session";

import { Link } from "react-router-dom";
import { TbEye, TbBookmark } from "react-icons/tb";

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
  const hasAdditionalImages = session.videos.length > 1;

  const handleMouseEnter = () => {
    if (hasAdditionalImages === false) {
      return;
    }

    setActive(true);
    setHeroImageIndex(1);
  };

  const handleMouseLeave = () => {
    if (hasAdditionalImages === false) {
      return;
    }

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
    }, 750);

    return () => {
      clearInterval(interval);
    };
  }, [active, session, heroImageIndex]);

  const video = session.videos[heroImageIndex];

  return (
    <div className="flex flex-col bg-zinc-800">
      <div
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
      >
        <Link className="link" to={`/sessions/${session.id}/review`}>
          {video !== undefined && video.previewImageUrl !== null && (
            <img
              src={video.previewImageUrl}
              className="w-full h-full object-contain"
            />
          )}
        </Link>
      </div>
      <div className="p-4 header-3 border-b border-zinc-600 flex items-center">
        <h2 className="flex-grow">
          <Link className="link" to={`/sessions/${session.id}/review`}>
            {session.name}
          </Link>
        </h2>
        <div className="flex items-center gap-4 text-white/70">
          <div className="flex items-center gap-1">
            <TbEye size={24} />
            {session.videos.length}
          </div>
          <div className="flex items-center gap-1">
            <TbBookmark size={24} />
            {session.bookmarks.length}
          </div>
        </div>
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
