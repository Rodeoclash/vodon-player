"use client";

import React from "react";
import { useNavigate } from "react-router-dom";
import Session from "services/models/session";
import { RootStoreContext } from "services/models/root";

export default function SessionCreate() {
  const store = React.useContext(RootStoreContext);
  const navigate = useNavigate();

  const handleClick = () => {
    const session = new Session({ name: "Test", selectedVideoRef: null });
    store.addSession(session);
    navigate(`/sessions/${session.id}/setup`);
  };

  return (
    <button className="btn btn-primary" onClick={() => handleClick()}>
      Create new session
    </button>
  );
}
