import { useField } from '@codegateinc/react-form-builder-v2'
import { validators } from 'lib/utils'

enum FormFields {
    Email = 'email',
    Password = 'password'
}

export const useLoginFormFields = () => {
    const emptyRule = {
        validate: validators.notEmpty,
        errorMessage: 'Empty'
    }

    const email = useField({
        key: FormFields.Email,
        label: 'Email',
        initialValue: '',
        isRequired: true,
        validateOnBlur: true,
        validationRules: [
            emptyRule,
            {
                validate: validators.email,
                errorMessage: 'Invalid email'
            }
        ]
    })

    const password = useField({
        key: FormFields.Email,
        label: 'Password',
        initialValue: '',
        isRequired: true,
        validateOnBlur: true,
        validationRules: [emptyRule]
    })

    return {
        email,
        password
    }
}
