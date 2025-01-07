import { resolve } from "path";
import { defineConfig } from "vite";
import injectHTML from "vite-plugin-html-inject";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        portfolio: resolve(__dirname, "portfolio.html"),
        contact: resolve(__dirname, "contacts.html"),
        privacypolicy: resolve(__dirname, "privacy-policy.html"),
      },
    },
  },
  plugins: [injectHTML()],
});
