import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy:{
      "/api":"https://accredian-backend-task-production-4ace.up.railway.app/"
    }
  },
  plugins: [react()],
})
