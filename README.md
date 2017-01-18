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
npm start
```

## Build for production
Compile the `lib/` directory to `dist/` using [Babel](https://babeljs.io/):
```
npm run build
```

## Serve production files
Serve the compiled `dist/` directory on port `8080`:
```
npm run serve
```

## Test
Run the tests in the `test/` directory:
```
npm test
```
