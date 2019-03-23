[![Build Status][travis-image]][travis-url]
[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![MIT License][license-image]][license-url]

A parcel plugin for riot.js

## Using
Add parcel-plugin-riot to your project.
```
npm i parcel-plugin-riot
```

-> You are ready!

```javascript

const riot = require('riot')
require('./src/App.tag')

riot.mount('*')
```

## Configuration

If you want compile your tags using custom riot compiler options you can create a `riot.config.js` in the root folder of your project

```js
export default {
  // html parser
  template: 'foo',
  // js parser
  type: 'baz',
  // css parser
  style: 'bar',
  parsers: {
    html: {
      foo: (html, opts, url) => require('foo').compile(html)
    },
    css: {
      bar: (tagName, css, opts, url) => require('bar').compile(css)
    },
    js: {
      baz: (js, opts, url) => require('baz').compile(js)
    }
  },
  // special options that may be used to extend
  // the default riot parsers options
  parserOptions: {
    js: {},
    template: {},
    style: {}
  }
}

```


[travis-image]:  https://img.shields.io/travis/riot/parcel-plugin-riot.svg?style=flat-square
[travis-url]:    https://travis-ci.org/riot/parcel-plugin-riot

[license-image]: https://img.shields.io/badge/license-MIT-000000.svg?style=flat-square
[license-url]:   LICENSE

[npm-version-image]:   https://img.shields.io/npm/v/parcel-plugin-riot.svg?style=flat-square
[npm-downloads-image]: https://img.shields.io/npm/dm/parcel-plugin-riot.svg?style=flat-square
[npm-url]:             https://npmjs.org/package/parcel-plugin-riot

