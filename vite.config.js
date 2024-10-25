import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // This ensures Vite outputs to the 'dist' folder
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },

  esbuild: {
    jsx: "automatic", // Or use 'react-jsx' if needed
  },
});
