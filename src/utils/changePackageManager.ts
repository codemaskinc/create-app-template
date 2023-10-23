import { PackageManager } from '../types/index.js'
import { getUserPkgManager } from './getPackageManager.js'
import { replaceInFile } from './replaceInFile.js'

const possibleFiles = [
    'Dockerfile',
    'package.json',
    '.husky/pre-commit'
]

export const changePackageManager = (path: string) => {
    const packageManager = getUserPkgManager()

    if (packageManager === PackageManager.Yarn) {
        return
    }

    possibleFiles.forEach(file => replaceInFile(`${path}/${file}`, 'yarn', packageManager))
}
