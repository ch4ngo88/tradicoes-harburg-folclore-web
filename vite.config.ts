import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

// GitHub Pages base URL
const githubBase = "/tradicoes-harburg-folclore-web/";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? githubBase : "/", // 👈 wichtig!
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), tsconfigPaths()],
}));
