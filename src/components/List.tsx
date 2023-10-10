import React, { useState } from 'react'
import { Box, Text, useInput } from 'ink'

type Item = {
    label: string,
    value: string
}

type ListProps = {
    title: string,
    list: Array<Item>,
    onSubmit(answer: string): void,
    getReply(answer: string): string
}

export const List: React.FunctionComponent<ListProps> = ({
    title,
    list,
    onSubmit,
    getReply
}) => {
    const [ current, setCurrent ] = useState(0)
    const [ answered, setAnswered ] = useState(false)

    useInput((_input, key) => {
        if (answered) {
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
            onSubmit(list[current]?.value!)
            setAnswered(true)

            return
        }
    })

    return (
        <Box flexDirection='column'>
            <Text>
                {title}
            </Text>
            {list.map((item, index) => (
                <Text 
                    key={item.label}
                    color={index === current ? 'red' : 'white'}
                >
                    {index === current && !answered ? '> ' : '  '}
                    {item.label}
                </Text>
            ))}
            {answered && (
                <Text color='green'>
                    {getReply(list[current]!.value)}
                </Text>
            )}
        </Box>
    )
}