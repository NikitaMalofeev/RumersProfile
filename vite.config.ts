import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr({
    svgrOptions: {
      icon: true, // Позволяет использовать SVG как иконки
      svgo: false, // Отключает оптимизацию, если она вызывает ошибки
    },
  }),],
  assetsInclude: ['**/*.pdf'],
  publicDir: 'public',
  root: '.',
  resolve: {
    alias: {
      // Пример: import App from 'app/SomeApp'
      'app': path.resolve(__dirname, 'src/app'),

      // Пример: import { SomeFeature } from 'features/SomeFeature'
      'features': path.resolve(__dirname, 'src/features'),

      // Пример: import { SomeEntity } from 'entities/SomeEntity'
      'entities': path.resolve(__dirname, 'src/entities'),

      // Пример: import { SomePage } from 'pages/SomePage'
      'pages': path.resolve(__dirname, 'src/pages'),

      // Пример: import { SomeHelper } from 'shared/lib/helpers'
      'shared': path.resolve(__dirname, 'src/shared'),

      // Пример: import { SomeWidget } from 'widgets/SomeWidget'
      'widgets': path.resolve(__dirname, 'src/widgets'),
    },
  },
});
