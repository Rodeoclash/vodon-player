import { createBrowserRouter } from "react-router-dom";
import store from "services/models/root";
import Session from "./models/session";
import { MissingParameter, RecordNotFound } from "services/errors";

import RootLayout from "layouts/Root";
import SessionLayout from "layouts/Session";

import ManageSessions from "pages/ManageSessions";
import ReviewSession from "pages/ReviewSession";
import SetupSession from "pages/SetupSession";
import DownloadSession from "pages/DownloadSession";

export type SessionLoaderData = {
  session: Session;
};

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    path: "/",
    children: [
      {
        element: <ManageSessions />,
        index: true,
      },
      {
        element: <SessionLayout />,
        path: "sessions/:id",
        id: "session",
        loader: ({ params }): SessionLoaderData => {
          if (!params.id) {
            throw new MissingParameter("Path for session was missing its id");
          }

          const session = store.getSessionById(params.id);

          if (!session) {
            throw new RecordNotFound(
              `Could not find session with id: ${params.id}`
            );
          }

          return {
            session,
          };
        },
        children: [
          {
            element: <ReviewSession />,
            path: "review",
          },
          {
            element: <SetupSession />,
            path: "setup",
          },
          {
            element: <DownloadSession />,
            path: "download",
          },
        ],
      },
    ],
  },
]);

export default router;
