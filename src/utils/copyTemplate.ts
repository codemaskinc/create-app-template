import fs from 'fs-extra'
import { CopyTemplateResponse, CopyTemplateStatus } from '../types/index.js'

export const copyTemplate = (path: string): CopyTemplateResponse => {
    try {
        fs.copySync('./template/react/base', path)

        return {
            status: CopyTemplateStatus.Success
        }
    } catch (error) {
        return {
            status: CopyTemplateStatus.Error,
            error: String(error)
        }
    }
}
