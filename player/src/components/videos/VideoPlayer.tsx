import Video from "services/models/video";
import useFileHandles from "services/hooks/useVideoFileHandles";

type Props = {
  video: Video;
};

const VideoPlayer = ({ video }: Props) => {
  const { storageFileHandle, url } = useFileHandles(video);

  if (url === null) {
    return <p>No video url</p>;
  }

  return <video src={url} width="800" height="600" controls={true} />;
};

export default VideoPlayer;
