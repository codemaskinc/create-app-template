import path from 'node:path'
import { fileURLToPath } from 'node:url'

export const getPath = () => {
    const __fileName = fileURLToPath(import.meta.url)

    return {
        __fileName,
        __dirname: path.dirname(__fileName).replaceAll(/dist\/|utils|hooks/g, '')
    }
}
