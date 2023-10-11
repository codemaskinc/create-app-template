import { Question, QuestionItem, QuestionType, Template } from "../types/index.js";

export const questions = {
    [Question.AppDir]: {
        type: QuestionType.Text,
        initialValue: './my-codemask-app',
        question: 'Where should we create your new project?'
    },
    [Question.Template]: {
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
                label: 'NestJS',
                value: Template.NestJS
            }
        ],
        reply: answer => `Good choice! Using ${answer} 🚀!`
    },
    [Question.Extras]: {
        type: QuestionType.Radio,
        question: 'Do you want any extra libraries?',
        options: {
            [Template.React] : [
                {
                    label: '@codegateinc/react-form-builder-v2',
                    value: 'form'
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
    }
} satisfies Record<Question, QuestionItem>
