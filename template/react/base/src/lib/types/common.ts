/* eslint-disable @typescript-eslint/no-duplicate-enum-values */
export type Nullable<T> = null | T
// eslint-disable-next-line
export type KeyValuePair<T = any> = Record<string, T>

export enum PersistorKey {
    ThemeMode = 'app_theme',
    Locale = 'app_locale'
}
