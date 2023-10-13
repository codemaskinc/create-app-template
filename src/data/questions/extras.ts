import { QuestionRadioItem, QuestionType, Template } from '../../types/index.js'

export const extras = {
    type: QuestionType.Radio,
    question: 'Do you want any extra libraries?',
    options: {
        [Template.React] : [
            {
                label: '@codegateinc/react-form-builder-v2',
                value: 'form'
            },
            {
                label: 'react-toastify',
                value: 'toastify'
            }
        ],
        [Template.ReactNative] : [],
        [Template.Astro] : [],
        [Template.NestJSRestApi] : [],
        [Template.NestJSGraphQL] : []
    },
    initialList: {
        [Template.React] : ['form'],
        [Template.ReactNative] : [],
        [Template.Astro] : [],
        [Template.NestJSRestApi] : [],
        [Template.NestJSGraphQL] : []
    }
} satisfies QuestionRadioItem
