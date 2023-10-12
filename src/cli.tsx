#!/usr/bin/env node
import React from 'react'
import { render } from 'ink'
import meow from 'meow'
import { Template, Question } from './types/index.js'
import { App } from './app.js'

const cli = meow(
    `
	Usage
	  $ @codemaskinc/create-app-template

	Options
        --npm Use npm 
        --yarn Use yarn
        --pnpm Use pnpm
		--bun Use bun
        --template (react, react-native, astro, nest-js)

	Examples
	  $ @codemaskinc/create-app-template --bun --template react
`,
    {
        importMeta: import.meta,
        flags: {
            npm: {
                type: 'boolean'
            },
            yarn: {
                type: 'boolean'
            },
            pnpm: {
                type: 'boolean'
            },
            bun: {
                type: 'boolean'
            },
            template: {
                type: 'string'
            }
        }
    }
)

export const { flags } = cli

if (flags.template && !Object.values(Template).includes(flags.template as Template)) {
    console.error(`Invalid template value was provided - "${flags.template}"`)
    process.exit(1)
}

export const questionsToSkip = [
    ...flags.template ? [ Question.Template ] : []
]

render(<App />)
