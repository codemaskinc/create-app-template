import { ThemeMode } from 'lib/themes'
import { PersistorKey } from './common'

export type LocalStorage<TKey extends PersistorKey> =
    TKey extends PersistorKey.Locale ? string
        : TKey extends PersistorKey.ThemeMode ? ThemeMode
            : never
