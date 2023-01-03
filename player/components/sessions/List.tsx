"use client";

import store from "services/data/stores/root";

import Link from "next/link";

export default function Component() {
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
}
