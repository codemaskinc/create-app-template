import { PersistorKey, LocalStorage } from 'lib/types'

export const set = <TKey extends PersistorKey>(key: TKey, value: LocalStorage<TKey>) => localStorage.setItem(key, JSON.stringify(value))
export const get = <TKey extends PersistorKey>(key: TKey) => {
    const value = localStorage.getItem(key)

    if (!value) {
        return null
    }

    return JSON.parse(value) as LocalStorage<TKey>
}
export const clearKey = <TKey extends PersistorKey>(key: TKey) => localStorage.removeItem(key)
export const clear = () => Object.values(PersistorKey).forEach(clearKey)
