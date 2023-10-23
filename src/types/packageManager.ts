export enum PackageManager {
    Npm = 'npm',
    Yarn = 'yarn',
    Pnpm = 'pnpm',
    Bun = 'bun'
}

export type Package = {
    name: string,
    version: string
}
