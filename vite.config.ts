import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import path from "path";

export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@views": path.resolve(__dirname, "./src/views"),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "@assets/styles/_variables.scss";
        @import "@assets/styles/_mixins.scss";
        @import "@assets/styles/_colors.scss";
        @import "@assets/styles/_font.scss";
        `,
      },
    },
  },

  server: {
    port: 8080,
  },

  base: '/fuse8/'
});
