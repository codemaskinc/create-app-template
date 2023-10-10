import { execa } from "execa"
import { getUserPkgManager } from "./getPackageManager.js"

export const installDeps = async (path: string) => {
    await execa(getUserPkgManager(), ['install'], {
        cwd: path,
        stderr: 'inherit'
    })
}
