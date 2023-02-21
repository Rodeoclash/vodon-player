import { observer } from "mobx-react-lite";
import Session from "services/models/session";

import AddLocal from "components/videos/AddLocal";
import AddURL from "components/videos/AddURL";

type Props = {
  session: Session;
};

const Add = observer(({ session }: Props) => {
  return (
    <div className="aspect-video flex flex-col items-center justify-center bg-stone-800 cursor-pointer">
      {session.hasVideos === false && (
        <p className="paragraph mb-4">
          You currently have no videos in your review session
        </p>
      )}
      <div className="flex items-center gap-4">
        <AddURL session={session} />
        <AddLocal session={session} />
      </div>
    </div>
  );
});

export default Add;
