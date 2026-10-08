import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ ssrBuild }) => ({
  plugins: [react()],
  resolve: ssrBuild
    ? {
        alias: [
          { find: 'react-head-real', replacement: path.resolve(__dirname, 'node_modules/react-head/dist/index.esm.js') },
          { find: /^\.\/resourceComponents$/, replacement: path.resolve(__dirname, 'src/ssr/resourceComponents.ts') },
          { find: /^react-head$/, replacement: path.resolve(__dirname, 'src/ssr/react-head-shim.tsx') },
        ],
      }
    : undefined,
}));
