import netlify from "@astrojs/netlify";
import tailwindcss from "@tailwindcss/vite";
// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  adapter: netlify({
    devFeatures: {
      images: false,
      environmentVariables: false,
    },
  }),
  vite: {
    plugins: [tailwindcss()],
  },
});
