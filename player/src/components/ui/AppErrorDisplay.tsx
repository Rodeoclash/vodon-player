import { Component, ErrorInfo, ReactNode } from "react";
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
    Sentry.captureException(error);
  }

  public render() {
    const { error } = this.state;
    if (error !== null) {
      const renderedError = (() => {
        switch (true) {
          case error instanceof MissingRequiredAPIs:
            return <p>You are missing required APIs</p>;

          default:
            return <p>Unknown error</p>;
        }
      })();

      return (
        <div className="w-screen h-screen flex items-center justify-center text-center">
          <div>
            <h1 className="header-1">Sorry, we encountered an error!</h1>
            <div className="mt-6">{renderedError}</div>
            <pre className="mt-6 font-mono bg-zinc-800 p-4">
              {error.message}
            </pre>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
