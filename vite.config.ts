import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Nyiakeng-Puachue-Memory-Game/",
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
