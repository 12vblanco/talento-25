import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": "/src", // Optional: Add an alias for your src directory
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@fortawesome/fontawesome-free/css/all.css";`,
      },
    },
  },
});
