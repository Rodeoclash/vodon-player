"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Session } from "services/models/session";
import { RootStoreContext } from "services/models/root";

export default function Component() {
  const store = React.useContext(RootStoreContext);
  const router = useRouter();

  const handleClick = () => {
    const session = new Session({ name: "Test" });
    store.addSession(session);
    router.push(`/sessions/${session.id}/setup`);
  };

  return (
    <button className="button" onClick={() => handleClick()}>
      Create new session
    </button>
  );
}
