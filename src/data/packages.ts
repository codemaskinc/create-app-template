import { Package } from '../types/index.js'

export const packagesExtrasMap = {
    form: {
        name: '@codegateinc/react-form-builder-v2',
        version: '1.2.24'
    },
    toastify: {
        name: 'react-toastify',
        version: '9.1.3'
    }
} satisfies Record<string, Package>
