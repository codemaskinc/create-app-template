import { execa } from 'execa'
import { Template } from '../types/index.js'

export const cloneTemplate = async (template: Template, path: string) => {
    const repoLink = (() => {
        switch (template) {
        case Template.React:
            return 'https://github.com/codemaskinc/react-template'
        case Template.ReactNative:
        case Template.Astro:
        case Template.NestJSRestApi:
        case Template.NestJSGraphQL:
        default:
            return ''
        }
    })()

    await execa('git', ['clone', repoLink, path])
}
