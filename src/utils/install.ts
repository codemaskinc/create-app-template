import { execa } from "execa"
import { getUserPkgManager } from "./getPackageManager.js"

export const install = async (path: string, packages: Array<string>) => {
    const pkgManager = getUserPkgManager()
    const installCommand = pkgManager === 'yarn'
        ? 'add'
        : 'install'

    await execa(pkgManager, [installCommand, ...packages], {
        cwd: path
    })
}
