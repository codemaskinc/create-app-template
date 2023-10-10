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
		--name Your name

	Examples
	  $ create-codemask-app --name=Jane
	  Hello, Jane
`,
	{
		importMeta: import.meta,
		flags: {
			name: {
				type: 'string',
			},
		},
	},
)

export const { flags } = cli

render(<App />)
