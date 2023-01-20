import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Session() {
  return (
    <main>
      <nav>
        <ul className="flex items-center gap-4">
          <li>
            <Link className="link" to="/">
              Sessions
            </Link>
          </li>
          <li>
            <Link className="link" to="review">
              Review
            </Link>
          </li>
          <li>
            <Link className="link" to="setup">
              Setup
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </main>
  );
}
