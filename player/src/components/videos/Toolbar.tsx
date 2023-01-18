import { observer } from "mobx-react-lite";
import Video from "services/models/video";

import Delete from "components/videos/Delete";
import Edit from "components/videos/Edit";

type Props = {
  video: Video;
};

const Toolbar = observer(({ video }: Props) => {
  return (
    <>
      <div className="h-12 bg-black flex items-center px-2">
        <Edit video={video} />
        <Delete video={video} />
      </div>
    </>
  );
});

export default Toolbar;
