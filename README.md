# base-fragment-cache [![NPM version](https://img.shields.io/npm/v/base-fragment-cache.svg?style=flat)](https://www.npmjs.com/package/base-fragment-cache) [![NPM downloads](https://img.shields.io/npm/dm/base-fragment-cache.svg?style=flat)](https://npmjs.org/package/base-fragment-cache) [![Build Status](https://img.shields.io/travis/node-base/base-fragment-cache.svg?style=flat)](https://travis-ci.org/node-base/base-fragment-cache)

Base plugin that adds fragment-cache support to your Base application

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install base-fragment-cache --save
```

## Usage

Register the plugin with your [base](https://github.com/node-base/base) application:

```js
var Base = require('base');
var base = new Base();
var fragment = require('base-fragment-cache');
base.use(fragment());

// set a value on cache "foo"
base.fragment.set('foo', 'one', 'two');

// get the value of property "one" from cache "foo"
var one = base.fragment.get('foo', 'one');
//=> 'two'
```

See [fragment-cache](https://github.com/jonschlinkert/fragment-cache) for API documentation and additional information.

## Related projects

You might also be interested in these projects:

* [base](https://www.npmjs.com/package/base): base is the foundation for creating modular, unit testable and highly pluggable node.js applications, starting… [more](https://github.com/node-base/base) | [homepage](https://github.com/node-base/base "base is the foundation for creating modular, unit testable and highly pluggable node.js applications, starting with a handful of common methods, like `set`, `get`, `del` and `use`.")
* [base-data](https://www.npmjs.com/package/base-data): adds a `data` method to base-methods. | [homepage](https://github.com/node-base/base-data "adds a `data` method to base-methods.")
* [base-option](https://www.npmjs.com/package/base-option): Adds a few options methods to base, like `option`, `enable` and `disable`. See the readme… [more](https://github.com/node-base/base-option) | [homepage](https://github.com/node-base/base-option "Adds a few options methods to base, like `option`, `enable` and `disable`. See the readme for the full API.")

## Contributing

This document was generated by [verb](https://github.com/verbose/verb), please don't edit directly. Any changes to the readme must be made in [.verb.md](.verb.md). See [Building Docs](#building-docs).

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/node-base/base-fragment-cache/issues/new).

## Building docs

Generate readme and API documentation with [verb](https://github.com/verbose/verb):

```sh
$ npm install -g verb verb-readme-generator && verb
```

## Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

## Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2016, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT license](https://github.com/node-base/base-fragment-cache/blob/master/LICENSE).

***

_This file was generated by [verb](https://github.com/verbose/verb), v0.9.0, on June 07, 2016._