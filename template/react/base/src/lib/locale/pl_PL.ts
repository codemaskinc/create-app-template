import { PathNames } from 'lib/routing'
import { ThemeMode } from 'lib/themes'
import { Dictionary } from './locale'

export const plPL: Dictionary = {
    components: {
        nav: {
            [PathNames.A]: 'A',
            [PathNames.Home]: 'Strona główna',
            [ThemeMode.Dark]: 'Ciemny 🌛',
            [ThemeMode.Light]: 'Jasny 🌞',
            currentLanguage: 'Polski 🇵🇱'
        }
    }
}
