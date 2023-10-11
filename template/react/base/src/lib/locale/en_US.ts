import { PathNames } from 'lib/routing'
import { ThemeMode } from 'lib/themes'
import { Dictionary } from './locale'

export const enUS: Dictionary = {
    components: {
        nav: {
            [PathNames.A]: 'A',
            [PathNames.Home]: 'Home',
            [ThemeMode.Dark]: 'Dark 🌛',
            [ThemeMode.Light]: 'Light 🌞',
            currentLanguage: 'English 🇺🇸'
        }
    }
}
