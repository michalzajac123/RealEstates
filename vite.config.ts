import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      "/directus": {
        target: "https://orca-app-8y4zd.ondigitalocean.app/",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/directus/, ""),
      },
    },
  },
});
