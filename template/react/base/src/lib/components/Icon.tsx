import React from 'react'
import styled from 'styled-components'
import { IconProps } from 'lib/types'
import { useIconColor } from 'lib/hooks'

export const Icon: React.FunctionComponent<React.PropsWithChildren<IconProps>> = ({
    size = 32,
    forceColor,
    children,
    onClick,
    viewBox
}) => {
    const color = useIconColor(forceColor)

    return (
        <Container
            role="svg"
            width={size}
            fill={color}
            height={size}
            stroke={color}
            onClick={event => {
                if (onClick) {
                    event.stopPropagation()
                    onClick()
                }
            }}
            viewBox={viewBox || '0 0 40 40'}
        >
            {children}
        </Container>
    )
}

const Container = styled.svg`
    ${props => props.onClick ? 'cursor: pointer;' : ''}
`
