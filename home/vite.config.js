import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

export default {
  base: '/',
  server: {
    cors: true,
    fs: {
      strict: false,
      allow: ['..', '../webgl']
    }
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'partials'),
    }),
  ],
};
