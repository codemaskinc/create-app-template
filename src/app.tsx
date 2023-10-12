import React from 'react'
import { Box } from 'ink'
import { useCreateProject, useQuestions } from './hooks/index.js'

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
        </Box>
    )
}
