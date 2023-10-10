import React from 'react'
import styled from 'styled-components'
import { stylesHelpers } from 'lib/styles'

type LoaderProps = {
    color?: string,
    size?: number,
    lineThickness?: number,
    rotateTimeInSeconds?: number
}

export const Loader: React.FunctionComponent<LoaderProps> = ({
    color,
    size = 60,
    rotateTimeInSeconds = 1.5,
    lineThickness = 2
}) => (
    <Container
        size={size}
        color={color}
        lineThickness={lineThickness}
        rotateTimeInSeconds={rotateTimeInSeconds}
    />
)

const Container = styled.div<LoaderProps>`
    @keyframes spinRight {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    @keyframes spinLeft {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(-720deg);
        }
    }
    position: relative;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
    border: ${props => props.lineThickness}px solid transparent;
    border-top-color: ${props => props.color || props.theme.layout.primary};
    border-left-color: ${props => props.color || props.theme.layout.primary};
    border-radius: 50%;
    animation: spinRight ${props => props.rotateTimeInSeconds}s linear infinite;
    &::before {
        content: "";
        position: absolute;
        top: ${props => 0.15 * (props.size as number)}px;
        left: ${props => 0.15 * (props.size as number)}px;
        right: ${props => 0.15 * (props.size as number)}px;
        bottom: ${props => 0.15 * (props.size as number)}px;
        border: ${props => props.lineThickness}px solid transparent;
        border-top-color: ${props => stylesHelpers.hexToRGBA(props.color || props.theme.layout.primary, 0.8)};
        border-left-color: ${props => stylesHelpers.hexToRGBA(props.color || props.theme.layout.primary, 0.8)};
        border-radius: 50%;
        animation: spinLeft ${props => props.rotateTimeInSeconds}s linear infinite;
    }

`
