<p align="center">
    <img src="https://raw.githubusercontent.com/codemaskinc/create-app-template/main/logo.png" width="400"/>
</p>

## <a href='https://www.typescriptlang.org/'><img src='https://badges.frapsoft.com/typescript/code/typescript.png?v=101' alt='typescript' height=20/></a> <a href='http://opensource.org/licenses/MIT'><img src='http://img.shields.io/badge/license-MIT-brightgreen.svg' alt='MIT' /></a> <a href="https://badge.fury.io/js/@codemaskinc%2Fcreate-app-template"><img src="https://badge.fury.io/js/@codemaskinc%2Fcreate-app-template.svg" alt="npm version" height="20"></a> <a href="https://www.npmjs.com/package/@codemaskinc/create-app-template"><img src="https://img.shields.io/npm/dm/%40codemaskinc%2Fcreate-app-template" alt="npm downloads" height="20"></a>

## Usage

#### npm

```bash
npm create @codemaskinc/app-template
```

#### yarn

```bash
yarn create @codemaskinc/app-template
```

#### pnpm

```bash
pnpm create @codemaskinc/app-template
```

#### bunx

```bash
bunx @codemaskinc/create-app-template
```

## Flags

The following flags can be used to configure the package manager and template:

| Flag | Description |
|---|---|
| `--npm` | Selects the NPM package manager. |
| `--yarn` | Selects the Yarn package manager. |
| `--pnpm` | Selects the PNPM package manager. |
| `--bun` | Selects the Bun package manager. |
| `--template` | Selects a template to use when generating the project <br /> (e.g., `react`, `react-native`, `astro`, `nestjs-rest-api`, `nestjs-graphql`) |

## Local build

```bash
yarn build && npx create-app-template
```

### Adding extras

We can add extra functions to the template, they can be optionally selected when creating new project (example - template/react/extras/form)

Files from extras folder will be combined with files from base template. If there are two file with the same location (usually index.ts's) text from extra file will be placed in the bottom of the original one

You need to also define extras in other places in code

In ``src/data/questions/extras.ts`` there is ``extras`` object, you can add properties to array inside ``extras.options[Template]`` to enable selection of new extras.
label - text that appear in list of extras
value - name of folder where extras is placed

If your extras should install new package you can add them in ``src/data/packages.ts``
