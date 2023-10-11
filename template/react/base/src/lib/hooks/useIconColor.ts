import { useThemeStore } from 'lib/stores'

export const useIconColor = (forceColor?: string) => {
    const { themeState: { theme } } = useThemeStore()

    if (forceColor) {
        return forceColor
    }

    return theme.colors.white
}
