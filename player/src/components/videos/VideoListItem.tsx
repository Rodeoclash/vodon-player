import { observer } from "mobx-react-lite";
import Video from "services/models/video";

import RequestFileHandlePermission from "./RequestFileHandlePermission";
import VideoPlayer from "./VideoPlayer";
import useFileHandles from "services/hooks/useFileHandles";

type Props = {
  video: Video;
};

const VideoListItem = observer(({ video }: Props) => {
  const [localFileHandle, localFileHandlePermission, storageFileHandle] =
    useFileHandles(video);

  return (
    <tr key={video.id}>
      <td className="td">{video.id}</td>
      <td className="td">
        {localFileHandle === undefined ? "Missing" : "Found"}
      </td>
      <td className="td">
        <>
          {localFileHandlePermission === null
            ? "Unknown"
            : localFileHandlePermission}
          <RequestFileHandlePermission video={video} />
        </>
      </td>
      <td className="td">
        {video.copyToStorageInProgress === null
          ? "Unknown"
          : video.copyToStorageInProgress.toString()}
        {video.copyToStorageProgress && (
          <progress value={video.copyToStorageProgress} max="1" />
        )}
      </td>
      <td className="td">
        {storageFileHandle === undefined ? "Unknown" : "Found"}
      </td>
      <td className="td">
        <VideoPlayer video={video} />
      </td>
    </tr>
  );
});

export default VideoListItem;
