import fs from 'fs-extra'

export const replaceInFile = (path: string, searchValue: string, replaceValue: string) => {
    const file = fs.readFileSync(path, 'utf-8')
    fs.rmSync(path)
    fs.writeFileSync(path, file.replace(searchValue, replaceValue))
}
