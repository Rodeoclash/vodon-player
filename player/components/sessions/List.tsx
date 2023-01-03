"use client";

import React from "react";
import { observer } from "mobx-react-lite";
import { RootStoreContext } from "services/models/root";

import Link from "next/link";

const Component = observer(() => {
  const store = React.useContext(RootStoreContext);

  const sessions = store.allSessions().map((session) => (
    <tr key={session.id}>
      <td>
        <Link className="link" href={`/sessions/${session.id}`}>
          {session.id}
        </Link>
      </td>
      <td>0</td>
    </tr>
  ));

  if (sessions.length === 0) {
    return <em>No sessions created yet</em>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>No. videos</th>
        </tr>
      </thead>
      <tbody>{sessions}</tbody>
    </table>
  );
});

export default Component;
