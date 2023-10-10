import { useMemo } from 'react'
import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { PersistorKey } from 'lib/types'
import { ThemeMode, lightTheme, darkTheme } from 'lib/themes'

const themeModeAtom = atomWithStorage<ThemeMode>(PersistorKey.ThemeMode, ThemeMode.Dark)

export const useThemeStore = () => {
    const [themeMode, setThemeMode] = useAtom(themeModeAtom)
    const isDarkMode = useMemo(() => themeMode === ThemeMode.Dark, [themeMode])
    const toggleTheme = () => themeMode === ThemeMode.Dark
        ? setThemeMode(ThemeMode.Light)
        : setThemeMode(ThemeMode.Dark)

    return {
        themeActions: {
            setThemeMode,
            toggleTheme
        },
        themeState: {
            themeMode,
            isDarkMode,
            theme: isDarkMode ? darkTheme : lightTheme
        }
    }
}
