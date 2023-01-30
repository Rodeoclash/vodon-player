import React from "react";
import { observer } from "mobx-react-lite";
import { RootStoreContext } from "services/models/root";

import { Link } from "react-router-dom";

const List = observer(() => {
  const store = React.useContext(RootStoreContext);

  const renderedSessions = store.sortedSessions.map((session) => (
    <tr key={session.id}>
      <td className="td">
        <Link className="link" to={`/sessions/${session.id}/review`}>
          {session.name}
        </Link>
      </td>
      <td className="td text-bright">{session.videoCount}</td>
    </tr>
  ));

  if (renderedSessions.length === 0) {
    return <em>No sessions created yet</em>;
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th className="th">Name</th>
          <th className="th">Number of videos</th>
        </tr>
      </thead>
      <tbody>{renderedSessions}</tbody>
    </table>
  );
});

export default List;
