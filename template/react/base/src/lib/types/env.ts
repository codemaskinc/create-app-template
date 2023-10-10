export type ReactEnv = {
    API_URL: string
}

declare global {
    interface Window {
        env: ReactEnv
    }
}
