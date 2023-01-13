import { observer } from "mobx-react-lite";
import Session from "services/models/session";

import SetupListItem from "./SetupListItem";

type Props = {
  session: Session;
};

const SetupList = observer(({ session }: Props) => {
  const renderedSetupListItems = session.videos.map((video) => (
    <SetupListItem key={video.id} video={video} />
  ));

  if (renderedSetupListItems.length === 0) {
    return <em>No videos in this session</em>;
  }

  return <>{renderedSetupListItems}</>;
});

export default SetupList;
