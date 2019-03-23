[![Build Status][travis-image]][travis-url]
[![Issue Count][codeclimate-image]][codeclimate-url]
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


[travis-image]:  https://img.shields.io/travis/riot/parcel-plugin-riot.svg?style=flat-square
[travis-url]:    https://travis-ci.org/riot/parcel-plugin-riot

[license-image]: https://img.shields.io/badge/license-MIT-000000.svg?style=flat-square
[license-url]:   LICENSE

[npm-version-image]:   https://img.shields.io/npm/v/riot-parcel-plugin-riot.svg?style=flat-square
[npm-downloads-image]: https://img.shields.io/npm/dm/riot-parcel-plugin-riot.svg?style=flat-square
[npm-url]:             https://npmjs.org/package/riot-parcel-plugin-riot

[codeclimate-image]: https://api.codeclimate.com/v1/badges/37de24282e8d113bb0cc/maintainability
[codeclimate-url]:   https://codeclimate.com/github/riot/parcel-plugin-riot

