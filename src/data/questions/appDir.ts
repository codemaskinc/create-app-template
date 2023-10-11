import { QuestionInputItem, QuestionType } from '../../types/question.js'

export const appDir = {
    type: QuestionType.Text,
    initialValue: './my-codemask-app',
    question: 'Where should we create your new project?'
} satisfies QuestionInputItem
