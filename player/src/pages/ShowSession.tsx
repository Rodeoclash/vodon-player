import { useRouteLoaderData, Link } from "react-router-dom";

import type { SessionLoaderData } from "services/routes";

export default function ShowSession() {
  const data = useRouteLoaderData("session") as SessionLoaderData;

  return (
    <>
      <h1 class="header-1">Session: {data.session.id}</h1>
      <nav>
        <ul>
          <li>
            <Link className="link" to="setup">
              Setup
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
