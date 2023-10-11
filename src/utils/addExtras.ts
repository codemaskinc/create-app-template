import fs from 'fs-extra'
import { walk } from './walk.js'
import { install } from './install.js'
import { packagesExtrasMap } from '../data/packages.js'

type AddExtrasProps = {
    path: string,
    extras: string,
    template: string
}

export const addExtras = async ({
    path,
    extras: extrasRaw,
    template
}: AddExtrasProps) => {
    if (extrasRaw === 'none') {
        return
    }

    const extras = extrasRaw.split('@@@')
    const extrasPackages = extras.reduce<Array<string>>((acc, extra) => {
        if (extra in packagesExtrasMap) {
            return [
                ...acc,
                `${packagesExtrasMap[extra as keyof typeof packagesExtrasMap]}@1.0.0`
            ]
        }

        return acc
    }, [])

    const installPromise = install(path, extrasPackages)
    const extrasPromise = Promise.all(extras.map(async extra => {
        const extraPath = `./template/${template}/extras/${extra}`
        const exist = await fs.exists(extraPath)

        if (!exist) {
            return
        }
        
        const extrasFiles = walk(extraPath).map(file => file.replace(`${extraPath}/`, ''))

        await Promise.all(extrasFiles.map(async file => {
            const originalFile = await fs.exists(`${path}/${file}`)
                ? fs.readFileSync(`${path}/${file}`, 'utf-8').split('\n').slice(0, 1).join('\n')
                : ''
            const extraFile = await fs.readFile(`${extraPath}/${file}`, 'utf-8')
            const newFile = originalFile !== ''
                ? `${originalFile}\n${extraFile}`
                : extraFile

            await fs.writeFile(`${path}/${file}`, newFile)
        }))
    }))

    await Promise.all([
        installPromise,
        extrasPromise
    ])
}