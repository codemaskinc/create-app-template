import React, { useState } from "react"
import { List, QuestionInput } from "../components/index.js"

export enum Question {
    AppDir = 'app-dir',
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
    [Question.AppDir]: {
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
    const [ answers, setAnswers ] = useState(questionsOrder.reduce((acc, question) => ({ ...acc, [question]: '' }), {} as Record<Question, string>))
    const answeredQuestions = (Object.keys(answers) as Array<Question>).filter(key => answers[key] !== '')

    const handleAnswer = (answer: string) => {
        setAnswers({ ...answers, [currentQuestion]: answer })
        const nextQuestion = questionsOrder[questionsOrder.indexOf(currentQuestion) + 1]

        if (!nextQuestion) {
            return
        }

        setCurrentQuestion(nextQuestion)
    }

    const questionsItems = (Object.keys(questions) as Array<Question>)
        .filter(question => answeredQuestions.includes(question) || question === currentQuestion)
        .map(question => {
            const data = questions[question]

            if (data.type === QuestionType.List) {
                return (
                    <List
                        key={question}
                        title={data.question}
                        list={data.options}
                        onSubmit={handleAnswer}
                        getReply={data.reply}
                    />
                )
            }

            return (
                <QuestionInput
                    key={question}
                    question={data.question}
                    onAnswer={handleAnswer}
                    initialValue={data.initialValue}
                />
            )
        })

    return {
        answers,
        questionsItems
    }
}
