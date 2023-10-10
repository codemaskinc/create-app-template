import { execa } from 'execa'
import { getUserPkgManager } from './getPackageManager.js'

export const installDeps = async (path: string) => {
    const pkgManager = getUserPkgManager()

    await execa(pkgManager, ['install'], {
        cwd: path,
        stderr: 'inherit'
    })

    // Update all dependencies
    await execa(pkgManager, ['ncu', '--cwd', path, '-u'], {
        cwd: '.',
        stderr: 'inherit'
    })
}
