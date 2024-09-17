import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@react-three/drei': 'path/to/@react-three/drei',
      '@react-three/fiber': 'path/to/@react-three/fiber',
    },
  },
});
