import { execa } from 'execa'
import fs from 'fs-extra'

export const initGit = async (path: string) => {
    await fs.rename(`${path}/gitignore`, `${path}/.gitignore`)
    await execa('git', ['init'], {
        cwd: path
    })
}
