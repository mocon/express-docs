# Express Docs
JSON-consuming documentation generator, using Express.js.

## Requirements
- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

## Installation
```
yarn
```

## Development
Start a [nodemon](https://github.com/remy/nodemon) server at `localhost:8080` with:
```
npm start
```

## Build for production
Compile the `lib/` directory to `dist/` using [Babel](https://babeljs.io/) with:
```
npm run build
```

## Serve production files
Serve the compiled `dist/` directory at `localhost:8080` with:
```
npm run serve
```

## Test
Run the tests in `test/` with:
```
npm test
```
