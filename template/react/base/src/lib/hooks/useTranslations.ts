import { useLocaleStore } from '../stores'
import { Dictionary } from '../locale'

export const useTranslations = () => {
    const { localeState: { T } } = useLocaleStore()

    return T as Dictionary
}
