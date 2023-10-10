import React, { Suspense } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { FullScreenLoader } from 'lib/components'
import { useThemeStore } from 'lib/stores'
import { ROUTES } from './routes'
import { PathNames } from './screens'
import { RouteType } from './types'

const renderAppRouter = (routes: Array<RouteType>, nestedRoute = false) => (
    <React.Fragment>
        {nestedRoute && routes.map(subRoute => (
            <React.Fragment key={subRoute.key}>
                <Route
                    path={subRoute.path}
                    element={subRoute.element}
                />
                {subRoute.children && renderAppRouter(subRoute.children, true)}
            </React.Fragment>
        ))}
        {!nestedRoute && routes.map(route => (
            <Route
                key={route.key}
                path={route.path}
                element={route.element}
            >
                {route.children && renderAppRouter(route.children, true)}
            </Route>
        ))}
    </React.Fragment>
)

export const AppRouter: React.FunctionComponent = () => {
    const { themeState } = useThemeStore()

    return (
        <AppContainer>
            <ThemeProvider theme={themeState.theme}>
                <Suspense
                    fallback={(
                        <FullScreenLoader />
                    )}
                >
                    <BrowserRouter>
                        <Routes>
                            {renderAppRouter(ROUTES)}
                            <Route
                                path="*"
                                element={(
                                    <Navigate to={PathNames.Home} />
                                )}
                            />
                        </Routes>
                    </BrowserRouter>
                </Suspense>
            </ThemeProvider>
        </AppContainer>
    )

}

const AppContainer = styled.div`
    height: 100vh;
    width: 100vw;
`
