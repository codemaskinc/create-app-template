import fs from "fs-extra"

export const walk = (path: string): Array<string> => {
    const files = fs.readdirSync(path)

    return files.reduce<Array<string>>((acc, file) => {
        const stat = fs.statSync(`${path}/${file}`)

        if (!stat.isDirectory()) {
            return [...acc, `${path}/${file}`]
        }

        return [
            ...acc,
            ...walk(`${path}/${file}`)
        ]
    }, [])
}
