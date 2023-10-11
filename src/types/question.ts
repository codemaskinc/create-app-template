export enum Question {
    AppDir = 'app-dir',
    Template = 'template',
    Extras = 'extras'
}

export enum QuestionType {
    Text = 'text',
    List = 'list',
    Radio = 'radio'
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
} | {
    type: QuestionType.Radio,
    question: string,
    options: Record<string, Array<ListItem>>,
    initialList: Record<string, Array<string>>
}
