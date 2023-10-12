import React, { useState } from 'react'
import { Box, Text, useInput } from 'ink'
import { Question } from '../types/index.js'
import { questionsToSkip } from '../cli.js'

type Item<TValue extends string> = {
    label: string,
    value: TValue
}

type ListProps<TValue extends string> = {
    title: string,
    question: Question,
    list: Array<Item<TValue>>,
    onSubmit(answer: TValue): void
}

export const List = <TValue extends string>({
    title,
    list,
    question,
    onSubmit
}: ListProps<TValue>) => {
    const hide = questionsToSkip.includes(question)
    const [ current, setCurrent ] = useState(0)
    const [ answered, setAnswered ] = useState(false)

    useInput((_input, key) => {
        if (answered || hide) {
            return
        }

        if (key.upArrow) {
            setCurrent(Math.max(current - 1, 0))

            return
        }

        if (key.downArrow) {
            setCurrent(Math.min(current + 1, list.length - 1))

            return
        }

        if (key.return) {
            onSubmit(list[current]!.value)
            setAnswered(true)

            return
        }
    })

    if (hide) {
        return null
    }

    return (
        <Box flexDirection='column'>
            <Text>
                {title}
            </Text>
            {list.map((item, index) => (
                <Text
                    key={item.value}
                    color={index === current ? 'red' : 'white'}
                >
                    {index === current && !answered ? '❯ ' : '  '}
                    {item.label}
                </Text>
            ))}
        </Box>
    )
}
