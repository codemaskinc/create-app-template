# create-codemask-app

## Install

```bash
$ npm install --global create-codemask-app
$ yarn add --global create-codemask-app
$ pnpm install --global create-codemask-app
$ bun install --global create-codemask-app
```

## CLI

```
$ create-codemask-app --help

  Usage
    $ create-codemask-app

  Options
    --npm Use npm 
    --yarn Use yarn
    --pnpm Use pnpm
    --bun Use bun
    --template (React, React Native, Astro, NestJS)

  Examples
    $ create-codemask-app --bun --template React
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
