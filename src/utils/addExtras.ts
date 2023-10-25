import fs from 'fs-extra'
import { packagesExtrasMap } from '../data/index.js'
import { getPath } from './getPath.js'
import { walk } from './walk.js'
import { install } from './install.js'
import { Package, Template } from '../types/index.js'

type AddExtrasProps = {
    appDir: string,
    extras: string,
    template: Template
}

export const addExtras = async ({
    appDir,
    extras: extrasRaw,
    template
}: AddExtrasProps) => {
    if (extrasRaw === 'none') {
        return
    }

    const extras = extrasRaw.split('@@@') as Array<keyof typeof packagesExtrasMap>
    const extrasPackages = extras.reduce<Array<Package>>((acc, extra) => {
        if (extra in packagesExtrasMap) {
            return [
                ...acc,
                packagesExtrasMap[extra]
            ]
        }

        return acc
    }, [])

    extras.forEach(extra => {
        const extraPath = `${getPath().__dirname}/template/${template}/extras/${extra}`
        const exist = fs.existsSync(extraPath)

        if (!exist) {
            return
        }

        const extrasFiles = walk(extraPath).map(file => file.replace(`${extraPath}/`, ''))

        extrasFiles.forEach(file => {
            const originalFile = fs.existsSync(`${appDir}/${file}`)
                ? fs.readFileSync(`${appDir}/${file}`, 'utf-8').split('\n').slice(0, -1).join('\n')
                : ''
            const extraFile = fs.readFileSync(`${extraPath}/${file}`, 'utf-8')
            const newFile = originalFile !== ''
                ? `${originalFile}\n${extraFile}`
                : extraFile

            fs.writeFileSync(`${appDir}/${file}`, newFile)
        })
    })

    await install(appDir, extrasPackages)
}
