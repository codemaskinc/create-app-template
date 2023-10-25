export const isEnum = <TEnum extends Record<string, string>>(testEnum: TEnum, value: string): value is TEnum[keyof TEnum] => Object.values(testEnum).includes(value)
