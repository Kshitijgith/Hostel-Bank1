import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Export Vite configuration
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Make the app accessible on the local network
    port: 3000,        // Optionally, set a custom port if needed
  },
});
