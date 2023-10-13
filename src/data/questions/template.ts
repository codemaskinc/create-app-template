import { QuestionListItem, QuestionType, Template } from '../../types/index.js'

export const template = {
    type: QuestionType.List,
    question: 'What template will you use?',
    options: [
        {
            label: 'React',
            value: Template.React
        },
        {
            label: 'React Native',
            value: Template.ReactNative
        },
        {
            label: 'Astro',
            value: Template.Astro
        },
        {
            label: 'NestJS - REST API',
            value: Template.NestJSRestApi
        },
        {
            label: 'NestJS - GraphQL',
            value: Template.NestJSGraphQL
        }
    ]
} satisfies QuestionListItem
