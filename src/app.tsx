import React from 'react'
import { Box, Text } from 'ink'
import { useCreateProject, useQuestions } from './hooks/index.js'

export const updateLogs = (newLogs: Array<string>) => {
    logs = newLogs
}

let logs = [] as Array<string>

export const App: React.FunctionComponent = () => {
    const { questionsItems, answers } = useQuestions()
    const { progressText, forceCreateQuestion } = useCreateProject(answers)

    return (
        <Box
            display='flex'
            flexDirection='column'
        >
            {questionsItems}
            {progressText}
            {forceCreateQuestion}
            {logs.map(log => (
                <Text color={'yellowBright'}>
                    {log}
                </Text>
            ))}
        </Box>
    )
}
