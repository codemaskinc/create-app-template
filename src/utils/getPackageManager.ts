import { flags } from '../cli.js'
import { PackageManager } from '../types/index.js'

export const getUserPkgManager = () => {
    const forcedManager = Object.values(PackageManager).find(manager => flags[manager] === true)

    if (forcedManager) {
        return forcedManager
    }

    // @ts-ignore
    const userAgent = process.env.npm_config_user_agent

    if (!userAgent) {
        return PackageManager.Npm
    }

    const packageManager = Object.values(PackageManager).find(pkgManager => userAgent.startsWith(pkgManager)) || PackageManager.Npm

    return packageManager
}
