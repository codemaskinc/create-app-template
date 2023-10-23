# @codemaskinc/create-app-template

## Usage

#### npx

```bash
  npx @codemaskinc/create-app-template
```

#### yarn

```bash
  yarn create @codemaskinc/create-app-template
```

#### pnpm

```bash
  pnpm create @codemaskinc/create-app-template
```

#### bunx

```bash
  bunx create @codemaskinc/create-app-template
```

## Flags

The following flags can be used to configure the package manager and template:

| Flag | Description |
|---|---|
| `--npm` | Selects the NPM package manager. |
| `--yarn` | Selects the Yarn package manager. |
| `--pnpm` | Selects the PNPM package manager. |
| `--bun` | Selects the Bun package manager. |
| `--template` | Selects a template to use when generating the project (e.g., `react`, `react-native`, `astro`, `nest-js`). |

## Local build

```bash
  yarn build && npx create-app-template
```

## Creating / Editing template

### Edit base template

Templates are located in templates folder in the root of repo (example - template/react/base)
This whole folder will be copied when creating new app

### Adding extras

We can add extra functions to our template, they can be optionally selected when creating new project (example - template/react/extras/form)

Files from extras folder will be combined with files from base template. If there are two file with the same location (usually index.ts's) text from extra file will be placed in the bottom of the original one

You need to also define extras in other places in code

In ``src/data/questions/extras.ts`` there is ``extras`` object, you can add properties to array inside ``extras.options[Template]`` to enable selection of new extras.
label - text that appear in list of extras
value - name of folder where extras is placed

If your extras should install new package you can add them in ``src/data/packages.ts`` (the keys are extras folder names)
