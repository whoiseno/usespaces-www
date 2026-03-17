import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import vueDevTools from "vite-plugin-vue-devtools";
import tsconfigPaths from "vite-tsconfig-paths";
import vueRouter from "vue-router/vite";

export default defineConfig({
  plugins: [tsconfigPaths(), tailwindcss(), vueRouter(), vue(), vueDevTools()],
});
