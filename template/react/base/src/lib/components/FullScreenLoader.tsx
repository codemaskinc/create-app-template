import styled from 'styled-components'
import { Loader } from './Loader'

export const FullScreenLoader = () => (
    <Container>
        <Loader />
    </Container>
)

export const Container = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`
