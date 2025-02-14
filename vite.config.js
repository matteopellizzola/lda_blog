import { defineConfig } from "vite";
import sitemapPlugin from "vite-plugin-sitemap";
import react from "@vitejs/plugin-react";
import loadNavigation from "./src/database/loadNavigation";

const menuItems = loadNavigation();
const dynamicRoutes = menuItems.navigationList
  .filter((item) => item.navigateTo != "/")
  .map((item) => `${item.navigateTo}`);

export default defineConfig(() => {
  return {
    build: {
      outDir: "build",
    },
    server: {
      port: 3000,
    },
    plugins: [
      react(),
      sitemapPlugin({
        outDir: "build",
        hostname: "https://www.laboratoriodiantonella.it",
        dynamicRoutes: dynamicRoutes,
        changefreq: "yearly",
      }),
    ],
  };
});
