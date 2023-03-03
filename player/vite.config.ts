import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "esnext",
  },
  plugins: [
    react({
      babel: {
        plugins: [["@babel/plugin-proposal-decorators", { legacy: true }]],
      },
    }),
    tsconfigPaths(),
  ],
});
