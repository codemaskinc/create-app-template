import { useEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { Dictionary, Language, languages, plPL } from 'lib/locale'
import { R, languageHelpers } from '../utils'
import { Nullable, PersistorKey } from '../types'

const languageAtom = atomWithStorage<Language>(PersistorKey.Locale, languageHelpers.getDefaultLanguage())

export const useLocaleStore = () => {
    const [T, setTranslations] = useState<Nullable<Dictionary>>(plPL)
    const [isChangingLanguage, setIsChangingLanguage] = useState(true)
    const [languageTag, setLanguageTag] = useAtom(languageAtom)

    useEffect(() => {
        languages[languageTag]()
            .then(setTranslations)
            .catch(R.T)
            .finally(() => setIsChangingLanguage(false))
    }, [languageTag])

    return {
        localeActions: {
            setLanguage: (nextLanguageTag: Language) => {
                if (nextLanguageTag === languageTag) {
                    return
                }

                // changing language is asynchronous as we need to load new chunk
                setLanguageTag(nextLanguageTag)
                setIsChangingLanguage(true)
                setTranslations(null)
            }
        },
        localeState: {
            T,
            languageTag,
            isChangingLanguage
        }
    }
}
