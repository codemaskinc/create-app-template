## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Env configuration

```
#express
API_PORT=8080 (default 3000)
API_HOST=0.0.0.0 (default 0.0.0.0)
```

```
#body parser
MAX_FILE_SIZE_KB=20971520 (default 20971520 - 20MB)
```

```
#cors
CORS_ALLOWED_ORIGINS=* optional default (*) origin separated by ","
```
