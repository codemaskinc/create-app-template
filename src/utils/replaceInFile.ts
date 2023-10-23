import fs from 'fs-extra'

export const replaceInFile = (path: string, searchValue: string | RegExp, replaceValue: string) => {
    if (!fs.existsSync(path)) {
        return
    }

    const file = fs.readFileSync(path, 'utf-8')
    fs.rmSync(path)
    fs.writeFileSync(path, file.replaceAll(searchValue, replaceValue))
}
