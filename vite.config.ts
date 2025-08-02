// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
  // ✅ DO NOT set `base: './'` for Vercel
  // base defaults to '/' which works correctly

  plugins: [
    react(),
    nodePolyfills({
      protocolImports: true
    })
  ],
  resolve: {
    alias: {
      buffer: 'buffer',
      process: 'process/browser',
      stream: 'stream-browserify'
    }
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis'
      }
    }
  },
  build: {
    // ✅ optional but recommended for Vercel stability
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true
  },
  server: {
    // ✅ optional: allows testing on local network
    host: true,
    port: 5173
  }
});
