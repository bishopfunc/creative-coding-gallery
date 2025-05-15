// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({mode}) => ({
  base: mode === "development" ? "/" : "/p5js/",
  plugins: [react()],
}));
