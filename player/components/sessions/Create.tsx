"use client";

import { useRouter } from "next/navigation";
import store from "services/data/stores/root";

export default function Component() {
  const router = useRouter();

  const handleClick = () => {
    const session = store.createSession({ name: "Test" });
    router.push(`/sessions/${session.id}/setup`);
  };

  return (
    <button className="button" onClick={() => handleClick()}>
      Create new session
    </button>
  );
}
