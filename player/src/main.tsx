import React from "react";
import ReactDOM from "react-dom/client";
import Modal from "react-modal";
import App from "./App";
import AppErrorDisplay from "components/ui/AppErrorDisplay";

import "index.css";

const el = document.getElementById("root") as HTMLElement;

Modal.setAppElement(el);

ReactDOM.createRoot(el).render(
  <React.StrictMode>
    <AppErrorDisplay>
      <App />
    </AppErrorDisplay>
  </React.StrictMode>
);
