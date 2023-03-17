import React from "react";
import ReactDOM from "react-dom/client";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import Modal from "react-modal";
import App from "./App";
import AppErrorDisplay from "components/AppErrorDisplay";

import "./index.css";

Sentry.init({
  dsn: "https://8a7b353a8eea4a4cb2c30fb5d66e1170@o1029363.ingest.sentry.io/4504731507294208",
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
});

const el = document.getElementById("root") as HTMLElement;

Modal.setAppElement(el);

ReactDOM.createRoot(el).render(
  <React.StrictMode>
    <AppErrorDisplay>
      <App />
    </AppErrorDisplay>
  </React.StrictMode>
);
