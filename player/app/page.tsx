"use client";

import dynamic from "next/dynamic";

import CreateSession from "components/sessions/Create";
const SessionList = dynamic(() => import("components/sessions/List"), {
  ssr: false,
});

export default function Page() {
  return (
    <>
      <div className="mb-4">
        <h1 className="header-1">Saved sessions</h1>
        <SessionList />
      </div>
      <div className="mb-4">
        <p>
          <CreateSession />
        </p>
      </div>
    </>
  );
}
