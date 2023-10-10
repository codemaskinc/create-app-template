#!/usr/bin/env node
import React from 'react'
import { render } from 'ink'
import meow from 'meow'
import { App } from './app.js'

const cli = meow(
	`
	Usage
	  $ create-codemask-app

	Options
        --npm Use npm 
        --yarn Use yarn
        --pnpm Use pnpm
		--bun Use bun

	Examples
	  $ create-codemask-app --bun
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
			}
		}
	}
)

export const { flags } = cli

render(<App />)
