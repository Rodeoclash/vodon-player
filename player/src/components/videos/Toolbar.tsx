import Video from "services/models/video";

import Delete from "components/videos/Delete";
import Information from "components/videos/Information";
import Edit from "components/videos/Edit";

type Props = {
  video: Video;
};

const Toolbar = ({ video }: Props) => {
  return (
    <>
      <div className="h-12 bg-black/90 flex items-center px-4 gap-2">
        <div className="flex-grow">
          <Edit video={video} />
        </div>
        <Information video={video} />
        <Delete video={video} />
      </div>
    </>
  );
};

export default Toolbar;
