import { defineConfig } from 'vite'
import { config as configDotEnv } from 'dotenv'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

configDotEnv()

if (process.env.NODE_ENV !== 'development') {
    throw new Error('Trying to serve project without NODE_ENV=development')
}

export default defineConfig({
    define: {
        'process.env': process.env
    },
    plugins: [
        react({
            babel: {
                plugins: [
                    [
                        'babel-plugin-styled-components',
                        {
                            displayName: true,
                            fileName: false
                        },
                        'babel-plugin-styled-components'
                    ],
                ]
            }
        }),
        tsconfigPaths(),
    ],
    build: {
        sourcemap: false,
        target: 'esnext',
        minify: 'terser'
    }
})
