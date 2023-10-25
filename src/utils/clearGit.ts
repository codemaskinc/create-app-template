import { execa } from 'execa'
import fs from 'fs-extra'

export const clearGit = async (path: string) => {
    await fs.rmdir(`${path}/.git`, { recursive: true })
    await execa('git', ['init'], { cwd: path })
}
