import { PathNames } from 'lib/routing'
import { ThemeMode } from 'lib/themes'

export type Dictionary<T = string> = {
    components: {
        nav: {
            [PathNames.A]: T,
            [PathNames.Home]: T,
            [ThemeMode.Dark]: T,
            [ThemeMode.Light]: T,
            currentLanguage: T
        }
    }
}
