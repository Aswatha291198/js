import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/salez': {
        target: 'http://localhost:8082',
        changeOrigin: true,
      },
    },
  },
});
