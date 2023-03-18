import { Component, ErrorInfo, ReactNode } from "react";
import consola from "consola";
import { TbMoodCry } from "react-icons/tb";
import { MissingRequiredAPIs } from "services/errors";
import * as Sentry from "@sentry/browser";
import { localStorageKey } from "services/models/root";

interface Props {
  children?: ReactNode;
}

interface State {
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return {
      error,
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (error instanceof MissingRequiredAPIs) {
      return;
    }

    Sentry.captureException(error);
  }

  public handleClickReset() {
    if (
      window.confirm(
        "This will reset all data in Vodon Player, you may want export your data first"
      ) === false
    ) {
      return;
    }

    consola.info("User reset data");

    localStorage.removeItem(localStorageKey);
    location.reload();
  }

  public render() {
    const { error } = this.state;
    if (error !== null) {
      const renderedError = (() => {
        switch (true) {
          case error instanceof MissingRequiredAPIs:
            return (
              <p>
                You are missing JavaScript APIs required for the Vodon Player to
                work. Please use a Chromium based browser like{" "}
                <strong>Google Chrome</strong> or{" "}
                <strong>Microsoft Edge</strong> which supports these APIs.
              </p>
            );

          default:
            return <p>Unknown error</p>;
        }
      })();

      return (
        <div className="w-screen h-screen flex items-center justify-center text-center p-8">
          <div className="max-w-prose">
            <div className="flex items-center justify-center mb-6">
              <TbMoodCry size={120} />
            </div>
            <h1 className="header-1">Sorry, we encountered an error!</h1>
            <div className="mt-6 text-white/80">{renderedError}</div>
            <p className="my-6 font-mono bg-zinc-800 p-4">{error.message}</p>
            <p className="my-6">
              <div className="flex items-center justify-center gap-4">
                <button className="btn btn-primary">Export data</button>
                <button
                  className="btn btn-warning"
                  onClick={this.handleClickReset}
                >
                  Reset Player
                </button>
              </div>
            </p>
            <div className="mt-6">
              <p>
                If you are getting this error, please export your data then
                reset the player using the buttons above. If you want to recover
                your sessions, please send the exported data to me and I'll help
                you recover it.
              </p>
              <p className="mt-3 text-sm">
                Email:
                <br />
                <a
                  className="underline text-sky-500"
                  href="mailto:sam@richardson.co.nz"
                >
                  sam@richardson.co.nz
                </a>
              </p>
              <p className="mt-3 text-sm">
                Discord:
                <br />
                <pre>Rodeoclash#4192</pre>
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
