import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // base apunta a tu repo de GitHub Pages: https://fenz-svg.github.io/fenz/
    base: "/",
});
