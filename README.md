# Express Docs
JSON-consuming documentation generator, using Express.js, ES6 syntax & EJS templates.

## Requirements
- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

## Installation
```
yarn
```

## Development
Start a [nodemon](https://github.com/remy/nodemon) server at `localhost:8080`:
```
yarn start
```

## Build for production
Compile the `lib/` directory to `dist/` using [Babel](https://babeljs.io/):
```
yarn build
```

## Serve production files
Serve the compiled `dist/` directory on port `8080`:
```
yarn serve
```

## Test
Run the tests in the `test/` directory:
```
yarn test
```

## Clean
Delete the `node_modules/` directory, and re-install dependencies:
```
yarn run clean
```
