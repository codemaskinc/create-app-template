import React from 'react'
import { Box } from 'ink'
import { List, QuestionInput } from './components/index.js'
import { useQuestions } from './hooks/index.js'
import { Question, QuestionType } from './hooks/useQuestions.js'

export const App: React.FunctionComponent = () => {
    const { questions, currentQuestion, nextQuestion, setAnswer, answeredQuestions } = useQuestions()

    const handleAnswer = (answer: string) => {
        setAnswer(currentQuestion, answer)
        nextQuestion()
        answeredQuestions
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

	return (
		<Box flexDirection='column' display='flex'>
            {questionsItems}
		</Box>
	)
}
