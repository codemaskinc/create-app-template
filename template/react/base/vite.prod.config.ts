import { defineConfig } from 'vite'
import { config as configDotEnv } from 'dotenv'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

configDotEnv()

if (process.env.NODE_ENV !== 'production') {
    throw new Error('Trying to build project without NODE_ENV=production')
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
                    [
                        '@babel/plugin-transform-react-jsx',
                        {
                            runtime: 'automatic'
                        },
                        '@babel/plugin-transform-react-jsx'
                    ]
                ]
            }
        }),
        tsconfigPaths(),
    ],
    build: {
        minify: false,
        sourcemap: true,
        target: 'esnext',
        commonjsOptions: {
          transformMixedEsModules: true,
        }
    }
})
