import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// Adds a simple /health endpoint in dev mode
const healthPlugin = () => ({
  name: 'dev-health-endpoint',
  configureServer(server: any) {
    server.middlewares.use((req: any, res: any, next: any) => {
      if (req.url === '/health') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end('ok')
        return
      }
      next()
    })
  },
})

export default defineConfig({
  plugins: [react(), healthPlugin() as any],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
