import { Language } from '../locale'

// to determine user language, here is an order of prorities:
// 1. Get language from persistor, if not set then we will invoke this function
// 2. Get lanuage from browser
// 3. Set language to default = English
export const getDefaultLanguage = (): Language => {
    const supportedLanguages = Object.values(Language)
    const browserLanguages = navigator.languages
    const perfectlyMatchedDialect = browserLanguages
        .find(language => supportedLanguages.some(supportedLanguage => supportedLanguage === language))

    // we have perfect match like en-US or pl-PL
    if (perfectlyMatchedDialect) {
        return perfectlyMatchedDialect as Language
    }

    const partialBrowserDialects = browserLanguages
        .flatMap(language => language.split('-'))
    const partialSupportedDialects = supportedLanguages
        .flatMap(language => language.split('-'))

    // we have partial match like en, pl
    const partiallyMatchedDialect = partialBrowserDialects
        .find(language => partialSupportedDialects.some(supportedLanguage => supportedLanguage === language))

    if (!partiallyMatchedDialect) {
        return Language.en_US
    }

    const matchedLanguage = supportedLanguages.find(language => language.includes(partiallyMatchedDialect))

    return matchedLanguage
        ? matchedLanguage as Language
        : Language.en_US
}
