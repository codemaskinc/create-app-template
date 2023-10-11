import React, { useState } from 'react'
import { List, QuestionInput, Radio } from '../components/index.js'
import { Question, QuestionType, Template } from '../types/index.js'
import { questions } from '../data/index.js'

const questionsOrder = Object.keys(questions) as Array<Question>

export const useQuestions = () => {
    const [ currentQuestion, setCurrentQuestion ] = useState(questionsOrder[0]!)
    const [ answers, setAnswers ] = useState(questionsOrder.reduce((acc, question) => ({ ...acc, [question]: '' }), {} as Record<Question, string>))
    const answeredQuestions = (Object.keys(answers) as Array<Question>).filter(key => answers[key] !== '')

    const handleAnswer = (answer: string) => {
        setAnswers({ ...answers, [currentQuestion]: answer || 'none' })
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

            if (data.type === QuestionType.Radio) {
                const template = answers.template as Template

                return (
                    <Radio
                        key={question}
                        question={data.question}
                        list={data.options[template]}
                        onSubmit={answers => handleAnswer(answers.join('@@@'))}
                        initialList={data.initialList[template]}
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
