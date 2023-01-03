import "../styles/globals.css";
import type { AppProps } from "next/app";
import store, { RootStoreContext } from "services/models/root";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootStoreContext.Provider value={store}>
      <Component {...pageProps} />
    </RootStoreContext.Provider>
  );
}
