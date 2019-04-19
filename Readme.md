[![Build Status][travis-image]][travis-url]
[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![MIT License][license-image]][license-url]

A parcel plugin for riot.js

## Using
Add parcel-plugin-riot to your project.

```bash
npm i -D @riotjs/parcel-plugin-riot @riotjs/compiler
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
export default {
  hot: false // set it to true if you are using hmr
  // add here all the other @riotjs/compiler options riot.js.org/compiler
  // template: 'pug' for example
}

```

If you want to enable hmr via `hot` option you will need to install also [`@riotjs/hot-reload`](https://www.npmjs.com/package/@riotjs/hot-reload)

```bash
npm i @riotjs/hot-reload -D
```

[travis-image]:  https://img.shields.io/travis/riot/parcel-plugin-riot.svg?style=flat-square
[travis-url]:    https://travis-ci.org/riot/parcel-plugin-riot

[license-image]: https://img.shields.io/badge/license-MIT-000000.svg?style=flat-square
[license-url]:   LICENSE

[npm-version-image]:   https://img.shields.io/npm/v/parcel-plugin-riot.svg?style=flat-square
[npm-downloads-image]: https://img.shields.io/npm/dm/parcel-plugin-riot.svg?style=flat-square
[npm-url]:             https://npmjs.org/package/parcel-plugin-riot

