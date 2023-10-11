import React from 'react'
import { Typography } from 'lib/components'
import { useTranslations } from 'lib/hooks'
import { PathNames } from 'lib/routing'

export const A: React.FunctionComponent = () => {
    const T = useTranslations()

    return (
        <Typography.H1>
            {T.components.nav[PathNames.A]}
        </Typography.H1>
    )
}
