import { RouterProvider } from "react-router-dom";
import { IconContext } from "react-icons";
import { Analytics } from "@vercel/analytics/react";
import { MissingRequiredAPIs } from "services/errors";

import router from "services/routes";

import "./App.css";

function App() {
  if ("requestVideoFrameCallback" in HTMLVideoElement.prototype === false) {
    throw new MissingRequiredAPIs(
      "vodon-player requires the `requestVideoFrameCallback` API to be present"
    );
  }

  return (
    <>
      <IconContext.Provider value={{ size: "2rem" }}>
        <RouterProvider router={router} />
      </IconContext.Provider>
      <Analytics />
    </>
  );
}

export default App;
