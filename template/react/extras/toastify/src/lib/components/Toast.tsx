import React from 'react'
import styled from 'styled-components'
import { colors } from 'lib/styles'

type ToastProps = {
    text: string,
    isDefault?: boolean
}

type TypographyStyles = {
    isDefault?: boolean
}

export const Toast: React.FunctionComponent<ToastProps> = ({ text, isDefault }) => (
    <CustomTypography isDefault={isDefault}>
        {text}
    </CustomTypography>
)

const CustomTypography = styled.div<TypographyStyles>`
    color: ${props => !props.isDefault ? colors.white : props.theme.typography.regular};
    line-height: 15px;
    font-weight: normal;
    font-size: 14px;
`
