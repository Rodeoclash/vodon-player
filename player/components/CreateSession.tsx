"use client";

import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

export default function CreateSession() {
  const router = useRouter();

  const handleClick = () => {
    const id = uuidv4();
    router.push(`/sessions/${id}`);
  };

  return <button onClick={() => handleClick()}>Create new session</button>;
}
