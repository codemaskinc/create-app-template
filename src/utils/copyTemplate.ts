import fs from 'fs-extra'
import { CopyTemplateResponse, CopyTemplateStatus, Template } from '../types/index.js'

export const copyTemplate = (path: string, template: Template): CopyTemplateResponse => {
    try {
        fs.copySync(`./template/${template}/base`, path)

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
