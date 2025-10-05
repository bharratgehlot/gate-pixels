import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["bad-words"],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("react-router")) {
            return "router";
          }
          if (id.includes("react") || id.includes("react-dom")) {
            return "react";
          }
          if (id.includes("node_modules")) {
            return "vendor";
          }
          if (id.includes("/data/")) {
            return "data";
          }
        },
      },
    },
  },
});
