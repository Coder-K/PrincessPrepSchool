import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Vite config — https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // .figma/make/deploy-preview passes `--mode development` for cached-preview builds.
  const emitSourcemaps = mode === "development";

  return {
    build: {
      sourcemap: emitSourcemaps ? "inline" : false,
      minify: !emitSourcemaps,
    },
    plugins: [react(), tailwindcss()],
    base: "/PrincessPrepSchool/",

    server: {
      host: process.env.FIGMA_DEV_SERVER_HOST || "0.0.0.0",
      port: parseInt(process.env.PORT || "8443"),
      strictPort: true,
      watch: {
        ignored: ["**/.figma/**"],
      },
    },
  };
});
