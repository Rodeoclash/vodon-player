import { RouterProvider } from "react-router-dom";
import { IconContext } from "react-icons";

import router from "services/routes";

import "./App.css";

function App() {
  return (
    <IconContext.Provider value={{ size: "2rem" }}>
      <RouterProvider router={router} />
    </IconContext.Provider>
  );
}

export default App;
