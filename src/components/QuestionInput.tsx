import React, { useEffect, useState } from 'react'
import { Box, Text, useInput } from 'ink'

type QuestionInputProps = {
    initialValue?: string,
    question: string,
    onAnswer(answer: string): void
}

export const QuestionInput: React.FunctionComponent<QuestionInputProps> = ({
    initialValue = '',
    question,
    onAnswer
}) => {
    const [ value, setValue ] = useState(initialValue)
    const [ showCursor, setShowCursor ] = useState(true)
    const [ answered, setAnswered ] = useState(false)

    useInput((input, key) => {
        if (answered) {
            return
        }

        if (key.delete || key.backspace) {
            setValue(value.slice(0, -1))

            return
        }

        if (key.return) {
            onAnswer(value)
            setAnswered(true)

            return
        }

        setValue(`${value}${input}`)
    })

    useEffect(() => {
        setShowCursor(true)

        const interval = setInterval(() => {
            setShowCursor(prev => !prev)
        }, 500)

        return () => clearInterval(interval)
    }, [value])

    return (
        <Box>
            <Box marginRight={1}>
                <Text color='white'>
                    ? {question}
                </Text>
            </Box>
            <Text color='red'>
                {value}
                {!answered && showCursor && (
                    <Text color='white'>
                        |
                    </Text>
                )}
            </Text>
        </Box>
    )
}
