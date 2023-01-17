import React from "react";
import ReactDOM from "react-dom/client";
import Modal from "react-modal";
import App from "./App";
import { MissingRequiredAPIs } from "services/errors";

import "index.css";

if ("requestVideoFrameCallback" in HTMLVideoElement.prototype === false) {
  throw new MissingRequiredAPIs(
    "vodon-player requires the `requestVideoFrameCallback` API to be present"
  );
}

const el = document.getElementById("root") as HTMLElement;

Modal.setAppElement(el);

ReactDOM.createRoot(el).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
