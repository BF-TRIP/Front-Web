import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin(), tsconfigPaths(), svgr()],
  server: {
    host: true,
  },
});
