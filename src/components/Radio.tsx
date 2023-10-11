import React, { useState } from 'react'
import { Box, Text, useInput } from 'ink'

type Item = {
    label: string,
    value: string
}

type RadioProps = {
    question: string,
    list: Array<Item>,
    initialList?: Array<string>,
    onSubmit(answer: Array<string>): void
}

export const Radio: React.FunctionComponent<RadioProps> = ({
    question,
    list,
    initialList = [],
    onSubmit
}) => {
    const [ selected, setSelected ] = useState(initialList)
    const [ current, setCurrent ] = useState(0)
    const [ answered, setAnswered ] = useState(false)

    useInput((input, key) => {
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
            onSubmit(selected)
            setAnswered(true)

            return
        }

        if (input === ' ') {
            const currentItem = list[current]!

            if (selected.includes(currentItem.value)) {
                setSelected(selected.filter(item => item !== currentItem.value))

                return
            }

            setSelected([...selected, currentItem.value])

            return
        }
    })

    return (
        <Box flexDirection='column'>
            <Text>
                {question}
            </Text>
            <Text>
                (Press space to toggle selection, enter to submit)
            </Text>
            {list.map((item, index) => (
                <Text
                    key={item.value}
                    color={index === current ? 'red' : 'white'}
                >
                    {index === current && !answered ? '❯ ' : '  '}
                    {selected.includes(item.value) ? '◉ ' : '◯ '}
                    {item.label}
                </Text>
            ))}
        </Box>
    )
}
