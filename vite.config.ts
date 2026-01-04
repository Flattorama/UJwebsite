import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  // 1. Conditional base path (GitHub vs Replit)
  base: process.env.GITHUB_ACTIONS === "true" ? "/UJwebsite/" : "/",

  plugins: [react()],

  // 2. CRITICAL FIX: Server Configuration
  server: {
    host: "0.0.0.0", // Allows Replit preview to connect
    port: 5173,      // Standard Vite port
    allowedHosts: true, // Bypasses host checking
    fs: {
      // Allows importing files from outside the 'client' folder 
      // (Fixes the attached_assets 404 errors)
      allow: ['..'], 
    },
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
