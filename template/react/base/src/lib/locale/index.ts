import type { Dictionary } from './locale'
import { plPL } from './pl_PL'

export enum Language {
    en_US = 'en-US',
    pl_PL = 'pl-PL'
}

export const languages = {
    [Language.pl_PL]: () => import('./pl_PL')
        .then(translations => translations.plPL as Dictionary),
    [Language.en_US]: () => import('./en_US')
        .then(translations => translations.enUS as Dictionary)
}

export {
    Dictionary,
    plPL
}
