import { execa } from 'execa'
import { Template } from '../types/index.js'

export const cloneTemplate = async (template: Template, path: string) => {
    const repoLink = (() => {
        switch (template) {
        // TODO: Add another templates
        case Template.React:
            return 'https://github.com/codemaskinc/react-template'
        case Template.ReactNative:
        case Template.Astro:
            return 'https://github.com/codemaskinc/astro-template'
        case Template.NestJSRestApi:
            return 'https://github.com/codemaskinc/api-starter'
        case Template.NestJSGraphQL:
        default:
            return ''
        }
    })()

    await execa('git', ['clone', repoLink, path])
}
