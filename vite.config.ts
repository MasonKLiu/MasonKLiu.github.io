import path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const basePath = env.VITE_BASE_PATH || "/";
  const devHost = env.VITE_DEV_HOST || "127.0.0.1";
  const devPort = Number(env.VITE_DEV_PORT) || 5173;
  const previewPort = Number(env.VITE_PREVIEW_PORT) || 4173;

  return {
    base: basePath,
    plugins: [react()],
    server: {
      host: devHost,
      port: devPort,
      strictPort: false,
    },
    preview: {
      host: devHost,
      port: previewPort,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
