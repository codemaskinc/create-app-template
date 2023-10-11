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
        [Template.NestJS] : []
    },
    initialList: {
        [Template.React] : ['form'],
        [Template.ReactNative] : [],
        [Template.Astro] : [],
        [Template.NestJS] : []
    }
} satisfies QuestionRadioItem
