import { defineConfig } from "vite"

export default defineConfig({
  // Base public path when served in production
  base: "/Interactive-Boxes/",
  // Configure server options
  server: {
    port: 3000,
    open: true,
  },
  // Build options
  build: {
    outDir: "dist",
    assetsDir: "assets",
    minify: true,
  },
})
