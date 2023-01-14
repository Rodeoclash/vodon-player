import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MissingRequiredAPIs } from "services/errors";

import "index.css";

if ("requestVideoFrameCallback" in HTMLVideoElement.prototype === false) {
  throw new MissingRequiredAPIs(
    "vodon-player requires the `requestVideoFrameCallback` API to be present"
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
