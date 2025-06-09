import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  // Determine the base URL based on the environment
  const isProductionBuildForGhPages = process.env.VITE_APP_DEPLOY_BASE_URL === 'true';

  return {
    plugins: [react()],
    // Set base conditionally
    base: isProductionBuildForGhPages ? '/Ganesh/' : '/',
  };
});