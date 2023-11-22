/* eslint-disable no-undef */
import { defineConfig, loadEnv  } from 'vite'
import react from '@vitejs/plugin-react'
// import { defineConfig, loadEnv } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.REACT_APP_NEWS_API_BASE_URL': JSON.stringify(env.REACT_APP_NEWS_API_BASE_URL),
      'process.env.REACT_APP_API_KEY': JSON.stringify(env.REACT_APP_API_KEY)
    },
    plugins: [react()],
  }
})