import React, { useState } from 'react'
import { questions } from '../data/index.js'
import { List, QuestionInput, Radio } from '../components/index.js'
import { EMPTY_ANSWER, Question, QuestionType, Template } from '../types/index.js'
import { flags, questionsToSkip } from '../cli.js'

const questionsOrder = Object.keys(questions)

const getInitialAnswers = () => {
    const result = questionsOrder.reduce((acc, question) => ({ ...acc, [question]: '' }), {} as Record<Question, string>)
    const template = flags.template as Template | undefined

    if (!template) {
        return result
    }

    return { ...result, template }
}


export const useQuestions = () => {
    const [ currentQuestion, setCurrentQuestion ] = useState(questionsOrder[0]!)
    const [ answers, setAnswers ] = useState(getInitialAnswers())
    const answeredQuestions = Object.keys(answers).filter(key => answers[key] !== '')

    const handleAnswer = (answer: string) => {
        // if there is empty answer, provide 'none' as value
        const newAnswers = { ...answers, [currentQuestion]: answer || EMPTY_ANSWER }
        setAnswers(newAnswers)
        const nextQuestion = questionsOrder.find((question, index) => {
            if (index <= questionsOrder.indexOf(currentQuestion)) {
                return false
            }

            // If there is no extras option for selected template, we want to skip extras question
            if (question === Question.Extras && questions.extras.options[newAnswers.template as Template].length === 0) {
                setAnswers({ ...newAnswers, [Question.Extras]: EMPTY_ANSWER })

                return false
            }

            return !questionsToSkip.includes(question)
        })

        if (!nextQuestion) {
            return
        }

        setCurrentQuestion(nextQuestion)
    }

    const questionsItems = Object.keys(questions)
        .filter(question => answeredQuestions.includes(question) || question === currentQuestion)
        .map(question => {
            const data = questions[question]

            if (data.type === QuestionType.List) {
                return (
                    <List
                        key={question}
                        question={question}
                        title={data.question}
                        list={data.options}
                        onSubmit={handleAnswer}
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
