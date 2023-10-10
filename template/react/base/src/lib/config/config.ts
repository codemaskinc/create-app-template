import { ReactEnv } from '../types'

export const APP_CONFIG: ReactEnv = {
    API_URL: window?.env?.API_URL || process.env.API_URL || ''
}
