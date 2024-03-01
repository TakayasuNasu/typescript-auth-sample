import * as path from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    env: {
      JWT_SECRET: 'JWT_SECRET',
    },
  },
})
