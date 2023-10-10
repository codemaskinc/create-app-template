import { execa } from 'execa'

export const initGit = async (path: string) => {
    await execa('git', ['init'], {
        cwd: path
    })
}
