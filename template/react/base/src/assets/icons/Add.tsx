import React from 'react'
import { IconProps } from 'lib/types'
import { Icon } from 'lib/components'

export const Add: React.FunctionComponent<IconProps> = props => (
    <Icon {...props}>
        <path d="M20 10V30" strokeLinecap="round"/>
        <path d="M30 20L10 20" strokeLinecap="round"/>
    </Icon>
)
