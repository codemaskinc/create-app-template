import type { Dictionary } from './locale'
import { enUS } from './en_US'

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
    enUS
}
