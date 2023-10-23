import React, { useEffect, useState } from 'react'
import { Text, useApp } from 'ink'
import fs from 'fs-extra'
import { QuestionInput } from '../components/index.js'
import { CreateProgress, Question } from '../types/index.js'
import { replaceInFile, initGit, addExtras, getPath, changePackageManager } from '../utils/index.js'

const textByProgress = {
    [CreateProgress.CopyTemplate]: 'Copying template...',
    [CreateProgress.InitGit]: 'Initializing git...',
    [CreateProgress.Complete]: 'Done! 🚀',
}

export const useCreateProject = (answers: Record<Question, string>) => {
    const [ progress, setProgress ] = useState<Array<CreateProgress>>([])
    const [ pathExist, setPathExist ] = useState(false)
    const { exit } = useApp()

    const addProgress = (newProgress: CreateProgress) => setProgress(oldProgress => [...oldProgress, newProgress])

    const createProject = async () => {
        const { extras, template, appDir } = answers

        addProgress(CreateProgress.CopyTemplate)
        fs.copySync(`${getPath().__dirname}/template/${template}/base`, appDir)
        addExtras({
            extras,
            appDir,
            template
        })
        addProgress(CreateProgress.InitGit)
        initGit(appDir)
        replaceInFile(`${appDir}/package.json`, new RegExp('"name": ".*",', 'g'), `"name": "${appDir.replace(/.*\//, '')}",`)
        changePackageManager(appDir)
        addProgress(CreateProgress.Complete)
        exit()
    }

    useEffect(() => {
        const filled = Object.values(answers).every((answer) => answer !== '')

        if (!filled) {
            return
        }

        if (fs.existsSync(answers[Question.AppDir])) {
            setPathExist(true)

            return
        }

        createProject()
    }, [answers])

    return {
        progressText: (
            <React.Fragment>
                {progress.map(progressItem => (
                    <Text
                        key={progressItem}
                        color='magenta'
                    >
                        {textByProgress[progressItem]}
                    </Text>
                ))}
            </React.Fragment>
        ),
        forceCreateQuestion: pathExist && progress.length === 0 ? (
            <QuestionInput
                question={`Path ${answers[Question.AppDir]} already exists. Do you want to overwrite it? You will lose all data that is in here. (y/n)`}
                onAnswer={answer => {
                    if (!['y', 'ye', 'yes'].includes(answer.toLocaleLowerCase())) {
                        exit()

                        return
                    }

                    fs.removeSync(answers[Question.AppDir])
                    createProject()
                }}
            />
        ) : null,
    }
}
