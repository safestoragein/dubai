import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Builds a single self-mounting IIFE bundle for non-React sites.
export default defineConfig({
  plugins: [react()],
  // React's build reads process.env.NODE_ENV, and lib mode does not shim it the
  // way the app build does — without this the bundle throws
  // "process is not defined" on any plain (non-Vite) host page and never mounts.
  define: { "process.env.NODE_ENV": JSON.stringify("production") },
  build: {
    lib: {
      entry: "src/widget-entry.tsx",
      name: "SafeStorageChat",
      formats: ["iife"],
      fileName: () => "safestorage-chat-widget.iife.js",
    },
    outDir: "dist",
    emptyOutDir: true,
  },
});
