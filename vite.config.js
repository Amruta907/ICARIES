// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    // Add your Render URL here:
    host: true,
    port: 3000,
    strictPort: true,
    preview: {
      allowedHosts: ["icarie-4.onrender.com", "localhost"],
    },
  },
});