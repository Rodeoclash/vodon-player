import { Outlet, NavLink } from "react-router-dom";

export default function Session() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <header className="h-16 flex items-stretch border-b border-stone-700">
        <div className="flex items-center justify-center signika text-2xl border-r border-stone-700 px-4">
          VODON
        </div>
        <nav className="flex items-stretch">
          <NavLink className="navlink" to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </NavLink>

          <NavLink className="navlink" to="review">
            Review
          </NavLink>

          <NavLink className="navlink" to="setup">
            Setup
          </NavLink>
        </nav>
        <div className="basis-5/12"></div>
      </header>
      <main className="flex-grow overflow-y-auto overflow-x-hidden">
        <Outlet />
      </main>
    </div>
  );
}
