import { observer } from "mobx-react-lite";
import Session from "services/models/session";

import RequestFileHandlePermission from "./RequestFileHandlePermission";

type Props = {
  session: Session;
};

const SessionList = observer(({ session }: Props) => {
  const videos = session.videos.map((video) => (
    <tr key={video.id}>
      <td className="td">{video.id}</td>
      <td className="td">
        {video.localFileHandleExists === null
          ? "Unknown"
          : video.localFileHandleExists.toString()}
      </td>
      <td className="td">
        {video.localFileHandlePermission === null
          ? "Unknown"
          : video.localFileHandlePermission}
        <RequestFileHandlePermission video={video} />
      </td>
      <td className="td">
        {video.opfsFileHandleExists === null
          ? "Unknown"
          : video.opfsFileHandleExists.toString()}
      </td>
    </tr>
  ));

  if (videos.length === 0) {
    return <em>No videos in this session</em>;
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th className="th">ID</th>
          <th className="th">Local file handle exists</th>
          <th className="th">Local file handle permission state</th>
          <th className="th">OPFS file handle exists</th>
        </tr>
      </thead>
      <tbody>{videos}</tbody>
    </table>
  );
});

export default SessionList;
