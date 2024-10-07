import { defineConfig } from '@farmfe/core';
import vue from '@vitejs/plugin-vue';
import farmPluginPostcss from "@farmfe/js-plugin-postcss";

export default defineConfig({
  vitePlugins: [vue()],
  compilation: {
    minify: true
  },
  plugins: [
    farmPluginPostcss(),
  ],
});
