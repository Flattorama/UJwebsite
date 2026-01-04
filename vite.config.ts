import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

// Create __dirname equivalent for ESM (fixes potential path errors)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  // 1. CONDITIONAL BASE PATH (The Fix):
  // Checks if we are building inside GitHub Actions.
  // If yes, use the repo name "/UJwebsite/".
  // If no (like in Replit), use the root "/".
  base: process.env.GITHUB_ACTIONS === "true" ? "/UJwebsite/" : "/",

  // 2. Uses standard React plugin (Replit plugins removed)
  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },

  // 3. Tells Vite your source code is in the 'client' folder
  root: path.resolve(__dirname, "client"),

  build: {
    // 4. Outputs the build to a simple 'dist' folder in the root
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
});
