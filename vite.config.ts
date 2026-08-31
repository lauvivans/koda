import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import mdx from "@mdx-js/rollup";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    mdx({
      jsx: true,
      outputFormat: "program",
    }),
    vueJsx({ include: /\.mdx$/ }),
  ],
});
