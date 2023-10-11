import React from 'react'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import { Nav } from 'lib/components'

export const Layout: React.FunctionComponent = () => (
    <LayoutContainer>
        <Nav />
        <OutletContainer>
            <Outlet />
        </OutletContainer>
    </LayoutContainer>
)

const LayoutContainer = styled.div`
    display: flex;
    height: 100%;
    background-color: ${props => props.theme.layout.background};
    overflow: hidden;
    display: grid;
    place-items: center;
`

const OutletContainer = styled.div`
    padding: 32px;
    display: flex;
    overflow: auto;
    flex: 1;
    z-index: 1;
`
