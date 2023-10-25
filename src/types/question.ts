export enum Question {
    AppDir = 'appDir',
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

export type QuestionInputItem = {
    type: QuestionType.Text,
    initialValue?: string,
    question: string
}

export type QuestionListItem = {
    type: QuestionType.List,
    question: string,
    options: Array<ListItem>
}

export type QuestionRadioItem = {
    type: QuestionType.Radio,
    question: string,
    options: Record<string, Array<ListItem>>,
    initialList: Record<string, Array<string>>
}

export type QuestionItem = QuestionInputItem | QuestionListItem | QuestionRadioItem

export const EMPTY_ANSWER = 'none' as const
