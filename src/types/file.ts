export enum CopyTemplateStatus {
    Success = 'success',
    Error = 'error'
}

export type CopyTemplateResponse = {
    status: CopyTemplateStatus.Success
} | {
    status: CopyTemplateStatus.Error
    error: string
}
