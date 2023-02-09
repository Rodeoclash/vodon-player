import React from "react";
import { observer } from "mobx-react-lite";
import { RootStoreContext } from "services/models/root";

import { Link } from "react-router-dom";
import TimeAgo from "components/ui/TimeAgo";

const List = observer(() => {
  const store = React.useContext(RootStoreContext);

  const renderedSessions = store.sortedSessions.map((session) => {
    const createdAtDate = new Date(session.createdAt);

    return (
      <tr key={session.id}>
        <td className="td">
          <Link className="link" to={`/sessions/${session.id}/review`}>
            {session.name}
          </Link>
        </td>
        <td className="td">{session.videoCount}</td>
        <td className="td">
          {createdAtDate.toLocaleDateString()}
          <span className="block text-sm text-white/50">
            <TimeAgo date={createdAtDate} />
          </span>
        </td>
      </tr>
    );
  });

  if (renderedSessions.length === 0) {
    return <em>No sessions created yet</em>;
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th className="th">Name</th>
          <th className="th">Number of viewpoints</th>
          <th className="th">Created</th>
        </tr>
      </thead>
      <tbody>{renderedSessions}</tbody>
    </table>
  );
});

export default List;
