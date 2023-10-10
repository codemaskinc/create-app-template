import React from 'react'
import { PathNames, ScreenNames } from './screens'
import { RouteType } from './types'

export const ROUTES: Array<RouteType> = [
    {
        key: 'home',
        name: ScreenNames.Home,
        path: PathNames.Home,
        element: React.createElement(
            React.lazy(() => import('features/home')
                .then(module => ({ default: module.Home }))
            )
        )
    },
    {
        key: 'a',
        name: ScreenNames.A,
        path: PathNames.A,
        element: React.createElement(
            React.lazy(() => import('features/a')
                .then(module => ({ default: module.A }))
            )
        )
    }
]
