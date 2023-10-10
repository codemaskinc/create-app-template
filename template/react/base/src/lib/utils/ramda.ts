/* eslint-disable */
import { KeyValuePair } from 'lib/types'
import { is, call, cond, always, T, isEmpty, splitEvery, toPairs, sortBy, prop, reverse, ascend, descend, sort } from 'ramda'

const isDefined = (subject: any) => typeof subject !== 'undefined' && subject !== null
const ifDefined = <T = any>(subject: any, then: (subject: T) => void) => isDefined(subject) && then(subject)

const clearObject = <T = KeyValuePair>(value: T): T => Object
    // @ts-ignore
    .keys(value)
    .filter(key => Boolean(value[key]) || typeof value[key] === 'boolean')
    .reduce((acc, curr) => ({
        ...acc,
        [curr]: value[curr]
    }), {} as T)

export {
    T,
    is,
    call,
    cond,
    always,
    isEmpty,
    ifDefined,
    isDefined,
    clearObject,
    splitEvery,
    toPairs,
    sortBy,
    prop,
    reverse,
    ascend,
    descend,
    sort
}
/* eslint-enable */
