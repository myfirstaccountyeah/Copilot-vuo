import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { createHtmlPlugin } from 'vite-plugin-html';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createHtmlPlugin({
      inject: {
        injectOptions: {
          tags: [
            {
              tag: 'link',
              attrs: {
                rel: 'stylesheet',
                href: '/styles/tailwind.css',
              },
            },
          ],
        },
      },
    }),
  ],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
  },
});