[![Build Status][ci-image]][ci-url]
[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![MIT License][license-image]][license-url]

A parcel plugin for riot.js

## Important

- If you are using Parcel < 2.0.0 please check the [this branch](https://github.com/riot/parcel-transformer-riot/tree/parcel-v1)
- If you are using Riot.js < 4.0.0 please check the [v3 branch](https://github.com/riot/parcel-transformer-riot/tree/v3)

## Using

### 1. Add the riot parcel transformer to your project.

```bash
npm i -D @riotjs/parcel-transformer-riot @riotjs/compiler
```

### 2. Configure your .parcelrc file 

```json
{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.riot": ["@riotjs/parcel-transformer-riot"]
  }
}
```

-> You are ready!

```js
import App from './src/App.riot'
import {component} from 'riot'

component(App)(document.querySelector('#root'), {
  message: 'Hello there'
})
```

## Configuration

If you want compile your tags using custom riot compiler options you can create a `riot.config.js` in the root folder of your project

```js
module.exports = {
  hot: false // set it to true if you are using hmr
  // add here all the other @riotjs/compiler options riot.js.org/compiler
  // template: 'pug' for example
}
```

If you want to use `pug` as your template engine, your `riot.config.js` might look like this

```js
const { registerPreprocessor } = require('@riotjs/compiler')
const { render } = require('pug')

// register the pug preprocessor
registerPreprocessor('template', 'pug', (code, options) => {
  const { file } = options

  return {
    code: render(code, {
      filename: file,
      pretty: true,
      doctype: 'html'
    })
  }
})

module.exports = {
  template: 'pug'
}
```

If you want to enable hmr via `hot` option you will need to install also [`@riotjs/hot-reload`](https://www.npmjs.com/package/@riotjs/hot-reload)

```bash
npm i @riotjs/hot-reload -D
```


[ci-image]:https://img.shields.io/github/workflow/status/riot/parcel-transformer-riot/test?style=flat-square
[ci-url]:https://github.com/riot/parcel-transformer-riot/actions

[license-image]: https://img.shields.io/badge/license-MIT-000000.svg?style=flat-square
[license-url]:   LICENSE

[npm-version-image]:   https://img.shields.io/npm/v/@riotjs/parcel-transformer-riot.svg?style=flat-square
[npm-downloads-image]: https://img.shields.io/npm/dm/@riotjs/parcel-transformer-riot.svg?style=flat-square
[npm-url]:             https://npmjs.org/package/@riotjs/parcel-transformer-riot

