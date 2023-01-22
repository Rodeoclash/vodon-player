import { Outlet, NavLink } from "react-router-dom";

export default function Session() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <header className="h-16 bg-stone-800 flex items-stretch">
        <nav className="basis-5/12 flex items-center gap-4 px-4">
          <NavLink className="navlink" to="/">
            Sessions
          </NavLink>

          <NavLink className="navlink" to="review">
            Review
          </NavLink>

          <NavLink className="navlink" to="setup">
            Setup
          </NavLink>
        </nav>
        <div className="basis-2/12 flex items-center justify-center signika text-2xl">
          VODON
        </div>
        <div className="basis-5/12"></div>
      </header>
      <main className="flex-grow overflow-y-auto overflow-x-hidden">
        <Outlet />
      </main>
    </div>
  );
}
