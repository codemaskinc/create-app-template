export enum Question {
    AppDir = 'app-dir',
    Template = 'template',
    TsOrJs = 'ts-or-js'
}

export enum QuestionType {
    Text = 'text',
    List = 'list'
}

type ListItem = {
    label: string,
    value: string
}

export type QuestionItem = {
    type: QuestionType.Text,
    initialValue?: string,
    question: string
} | {
    type: QuestionType.List,
    question: string,
    options: Array<ListItem>,
    reply(answer: string): string
}