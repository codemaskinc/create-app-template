import { useState } from "react"

export enum Question {
    AppName = 'app-name',
    Template = 'template',
    TsOrJs = 'ts-or-js'
}

export enum QuestionType {
    Text = 'text',
    List = 'list'
}

type QuestionItem = {
    type: QuestionType.Text,
    initialValue?: string,
    question: string
} | {
    type: QuestionType.List,
    question: string,
    options: string[],
    reply(answer: string): string
}

const questions = {
    [Question.AppName]: {
        type: QuestionType.Text,
        initialValue: './my-codemask-app',
        question: 'Where should we create your new project?'
    },
    [Question.Template]: {
    type: QuestionType.List,
        question: 'What template will you use?',
        options: ['React', 'React Native', 'NestJS', 'Astro'],
        reply: answer => `Good choice! Using ${answer} 🚀!`
    },
    [Question.TsOrJs]: {
        type: QuestionType.List,
        question: 'Will you use TypeScript or JavaScript?',
        options: ['TypeScript', 'JavaScript'],
        reply: answer => answer === 'TypeScript' ? 'Good choice! Using Typescript!' : 'Wrong choice! Using Typescript instead!'
    }
} satisfies Record<Question, QuestionItem>

const questionsOrder = Object.keys(questions) as Array<Question>

export const useQuestions = () => {
    const [ currentQuestion, setCurrentQuestion ] = useState(questionsOrder[0]!)
    const [ answers, setAnswers ] = useState({} as Record<Question, string>)

    return {
        questions,
        currentQuestion,
        nextQuestion: () => {
            const nextQuestion = questionsOrder[questionsOrder.indexOf(currentQuestion) + 1]

            if (!nextQuestion) {
                return
            }

            setCurrentQuestion(nextQuestion)
        },
        answers,
        setAnswer: (question: Question, answer: string) => setAnswers({ ...answers, [question]: answer }),
        answeredQuestions: (Object.keys(answers) as Array<Question>).filter(key => answers[key] !== '')
    }
}
