import { lightTheme } from './light'
import { darkTheme } from './dark'

export enum ThemeMode {
    Light = 'light',
    Dark = 'dark'
}

export const themes = {
    [ThemeMode.Light]: lightTheme,
    [ThemeMode.Dark]: darkTheme
}
