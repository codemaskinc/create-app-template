import React from 'react'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'

export const Layout: React.FunctionComponent = () => (
    <LayoutContainer>
        <PageContent>
            <OutletContainer>
                <Outlet />
            </OutletContainer>
        </PageContent>
    </LayoutContainer>
)

const LayoutContainer = styled.div`
    display: flex;
    height: 100%;
    background-color: ${props => props.theme.layout.background};
    overflow: hidden;
`

const PageContent = styled.div`
    height: 100%;
    transition: margin-left linear 0.2s;
    display: flex;
    background-color: ${props => props.theme.dark.dark75};
    flex: 1;
    flex-direction: column;
    overflow: hidden;
    position: relative;
`

const OutletContainer = styled.div`
    padding: 32px;
    display: flex;
    overflow: auto;
    flex: 1;
    z-index: 1;
`
