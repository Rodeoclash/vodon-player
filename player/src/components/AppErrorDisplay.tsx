import { Component, ErrorInfo, ReactNode } from "react";
import { TbMoodCry } from "react-icons/tb";
import { MissingRequiredAPIs } from "services/errors";
import * as Sentry from "@sentry/browser";

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
                <strong>Microsoft Edge</strong> which supports these APIs
              </p>
            );

          default:
            return <p>Unknown error</p>;
        }
      })();

      return (
        <div className="w-screen h-screen flex items-center justify-center text-center">
          <div className="max-w-prose">
            <div className="flex items-center justify-center mb-6">
              <TbMoodCry size={120} />
            </div>
            <h1 className="header-1">Sorry, we encountered an error!</h1>
            <div className="mt-6 text-white/80">{renderedError}</div>
            <p className="my-6 font-mono bg-zinc-800 p-4">{error.message}</p>
            <p>Please report this error to:</p>
            <p className="mt-3">
              Email:
              <br />
              <a
                className="underline text-sky-500"
                href="mailto:sam@richardson.co.nz"
              >
                sam@richardson.co.nz
              </a>
            </p>
            <p className="mt-3">
              Discord:
              <br />
              <pre>Rodeoclash#4192</pre>
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
