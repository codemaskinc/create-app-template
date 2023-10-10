import React from 'react'
import { Provider } from 'jotai'
import { AppRouter } from 'lib/routing'

export const App: React.FunctionComponent = () => (
    <Provider>
        <AppRouter />
    </Provider>
)
