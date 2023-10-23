import fs from 'fs-extra'
import { Package } from '../types/index.js'

export const install = async (path: string, packages: Array<Package>) => {
    const packagesRegex = /"dependencies": {(.*)},/s
    // Read package.json
    const packagesFile = fs.readFileSync(`${path}/package.json`, 'utf-8')
    // Get dependencies
    const packagesString = packagesFile.match(packagesRegex)?.[1]

    if (!packagesString) {
        throw new Error('Something went wrong while adding packages')
    }

    // Split dependencies into lines
    const lines = packagesString.split('\n')
    // Get spacing (how much spaces is in front of the dependency)
    const spacing = lines[1]?.match(/^\s+/)?.[0] ?? '    '
    // Create new dependencies
    const additionalPackages = packages.map(({ name, version }, index) => `${spacing}"${name}": "${version}"${index === packages.length - 1 ? '' : ','}`)
    // Join all lines
    const dependencies = [
        // Add ',' to last dependency
        ...lines.slice(0, -1).map((line, index, arr) => index === arr.length - 1 ? `${line},` : line),
        ...additionalPackages,
        ...lines.slice(-1)
    ].join('\n')

    // Write to package.json
    fs.writeFileSync(`${path}/package.json`, packagesFile.replace(packagesRegex, `"dependencies": {${dependencies}},`))
}
