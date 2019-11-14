# To Then [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/to-then/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/to-then)

Convert any type of promise to a then promise

[![NPM Badge](https://nodei.co/npm/to-then.png)](https://npmjs.com/package/to-then)

## Install

```sh
npm install to-then promise
```

## Usage

```js
const toThen = require("to-then");

const es6Promise = new Promise(resolve => resolve("Hello World!")); // Regular native promise.
const thenPromise = toThen(es6Promise); // Then promise.
```

## API

### toThen(promise)

#### promise

Type: `PromiseLike`

The promise to convert.
