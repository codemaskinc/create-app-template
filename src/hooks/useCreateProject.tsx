import React, { useEffect, useState } from 'react'
import { Text, useApp } from 'ink'
import fs from 'fs-extra'
import { QuestionInput } from '../components/index.js'
import { copyTemplate, installDeps, replaceInFile, initGit, addExtras } from '../utils/index.js'
import { CreateProgress, Question, Template } from '../types/index.js'

const textByProgress = {
    [CreateProgress.CopyTemplate]: 'Copying template...',
    [CreateProgress.InitGit]: 'Initializing git...',
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
        copyTemplate(path, answers['template'] as Template)
        addExtras({
            extras: answers['extras'],
            path,
            template: answers['template']
        })
        addProgress(CreateProgress.InitGit)
        initGit(path)
        addProgress(CreateProgress.InstallDeps)
        await installDeps(path)
        replaceInFile(`${path}/package.json`, 'my-app', answers['app-dir'].replace(/.*\//, ''))
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