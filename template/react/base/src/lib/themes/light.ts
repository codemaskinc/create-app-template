import { Theme } from 'lib/types'
import { colors, stylesHelpers } from '../styles'

export const lightTheme: Theme = {
    zIndex: {
        LevelMinus1: '-1',
        Level1: '1',
        Level10: '10',
        Level100: '100',
        Level999: '999'
    },
    typography: {
        regular: colors.typography.light.regular,
        gray: colors.typography.light.gray
    },
    layout: {
        primary: colors.layout.light.primary,
        secondary: colors.layout.light.secondary,
        foreground: colors.layout.light.foreground,
        background: colors.layout.light.background,
        border: colors.layout.light.border,
        backgroundDisabled: colors.transparent,
        hover: colors.gray.hover,
        shadow: colors.gray.shadow
    },
    gray: {
        shadow: colors.gray.shadow,
        hover: colors.gray.hover,
        gray100: colors.gray.gray100,
        gray75: colors.gray.gray75,
        gray50: colors.gray.gray50,
        gray25: colors.gray.gray25,
        gray0: colors.gray.gray0
    },
    dark: {
        dark100: colors.dark.dark100,
        dark75: colors.dark.dark75,
        dark50: colors.dark.dark50,
        dark25: colors.dark.dark25,
        dark0: colors.dark.dark0
    },
    accent: {
        accent100: colors.accent.accent100,
        accent75: colors.accent.accent75,
        accent50: colors.accent.accent50,
        accent25: colors.accent.accent25,
        accent0: colors.accent.accent0
    },
    colors,
    utils: stylesHelpers
}
