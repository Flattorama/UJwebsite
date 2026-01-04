import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  // Conditional base path
  base: process.env.GITHUB_ACTIONS === "true" ? "/UJwebsite/" : "/",
  
  plugins: [react()],
  
  // 1. ADD THIS SERVER BLOCK
  server: {
    host: "0.0.0.0", // vital for Replit to "see" the app
    port: 5173,      // explicitly set port (optional but good practice)
    allowedHosts: true, // Skips host checks that can block Replit previews
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },

  root: path.resolve(__dirname, "client"),

  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
});
