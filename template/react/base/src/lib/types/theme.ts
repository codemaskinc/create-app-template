import { colors, stylesHelpers } from 'lib/styles'

export type Theme<T = string> = {
    zIndex: {
        LevelMinus1: T,
        Level1: T,
        Level10: T,
        Level100: T,
        Level999: T
    },
    typography: {
        regular: T,
        gray: T
    },
    layout: {
        primary: T,
        secondary: T,
        foreground: T,
        background: T,
        border: T,
        backgroundDisabled: T,
        hover: T,
        shadow: T
    },
    gray: {
        shadow: T,
        hover: T,
        gray100: T,
        gray75: T,
        gray50: T,
        gray25: T,
        gray0: T
    },
    dark: {
        dark100: T,
        dark80: T,
        dark75: T,
        dark50: T,
        dark25: T,
        dark0: T
    },
    accent: {
        accent100: T,
        accent75: T,
        accent50: T,
        accent25: T,
        accent0: T
    },
    colors: typeof colors,
    utils: typeof stylesHelpers
}
