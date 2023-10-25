import { execa } from 'execa'
import { rimraf } from 'rimraf'

export const clearGit = async (path: string) => {
    await rimraf(`${path}/.git`)

    await execa('git', ['init'], { cwd: path })
}
