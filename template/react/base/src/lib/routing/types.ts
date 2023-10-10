import React from 'react'

export type RouteType = {
    key: string,
    children?: Array<RouteType>,
    path?: string,
    element?: React.ReactNode,
    name: string
}
