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

## Endpoints
####__POST `/[version]/generate-html`__ (example: `/1.2.3/generate-html`)

- `POST` a block of [autodoc](https://github.com/mocon/autodoc)-generated JSON, which will be normalized and rendered into an HTML template. The rendered template string will then be saved as static content, which will be accessible via `GET` requests to `/[version]` as described below.

####__GET `/[version]`__ (example: `/1.2.3`)

- This endpoint serves the static content generated by the `/[version]/generate-html` endpoint above.

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
