/*!
 * base-fragment-cache (https://github.com/node-base/base-fragment-cache)
 *
 * Copyright (c) 2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var debug = require('debug')('base:fragment-cache');
var FragmentCache = require('fragment-cache');
var isValid = require('is-valid-app');

module.exports = function(config) {
  config = config || {};

  var fn = config.types || function(app) {
    return app.isBase === true;
  };

  return function pluginFragment(app) {
    if (!isValid(app, 'base-fragment-cache', fn)) return;
    debug('initializing "%s", from "%s"', __filename, module.parent.id);

    var prop = config.name || 'fragment';
    var cache;

    Object.defineProperty(this, prop, {
      set: function(fragmentCache) {
        cache = fragmentCache;
      },
      get: function() {
        return cache || (cache = new FragmentCache());
      }
    });

    return pluginFragment;
  };
};
