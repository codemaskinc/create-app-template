import React, { useEffect, useState } from "react"
import { Text, useApp } from "ink"
import fs from "fs-extra"
import { QuestionInput } from "../components/index.js"
import { Question } from "./useQuestions.js"
import { copyTemplate, installDeps } from "../utils/index.js"
import { CreateProgress } from "../types/progress.js"

const textByProgress = {
    [CreateProgress.CopyTemplate]: 'Copying template...',
    [CreateProgress.InstallDeps]: 'Installing dependencies...',
    [CreateProgress.Complete]: 'Done! 🚀',
}

export const useCreateProject = (answers: Record<Question, string>) => {
    const [ progress, setProgress ] = useState<Array<CreateProgress>>([])
    const [ pathExist, setPathExist ] = useState(false)
    const { exit } = useApp()

    const addProgress = (newProgress: CreateProgress) => setProgress(oldProgress => [...oldProgress, newProgress])

    const createProject = async () => {
        const path = answers['app-dir']

        addProgress(CreateProgress.CopyTemplate)
        copyTemplate(path)
        addProgress(CreateProgress.InstallDeps)
        await installDeps(path)
        addProgress(CreateProgress.Complete)
        exit()
    }
    
    useEffect(() => {
        const filled = Object.values(answers).every((answer) => answer !== '')

        if (!filled) {
            return
        }

        if (fs.existsSync(answers['app-dir'])) {
            setPathExist(true)

            return
        }

        createProject()
    }, [answers])

    return {
        progressText: progress ? (
            <React.Fragment>
                {progress.map(progressItem => (
                    <Text color='magenta'>
                        {textByProgress[progressItem]}
                    </Text>
                ))}
            </React.Fragment>
        ) : null,
        forceCreateQuestion: pathExist && progress.length === 0 ? (
            <QuestionInput
                question={`Path ${answers['app-dir']} already exists. Do you want to overwrite it? You will lose all data that is in here. (y/n)`}
                onAnswer={answer => {
                    if (!['y', 'ye', 'yes'].includes(answer.toLocaleLowerCase())) {
                        exit()

                        return
                    }

                    fs.removeSync(answers['app-dir'])
                    createProject()
                }}
            />
        ) : null,
    }
}