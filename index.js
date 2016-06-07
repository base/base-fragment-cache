/*!
 * base-fragment-cache (https://github.com/node-base/base-fragment-cache)
 *
 * Copyright (c) 2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var debug = require('debug')('base-fragment-cache');

module.exports = function(config) {
  return function(app) {
    if (this.isRegistered('base-fragment-cache')) return;
    debug('initializing "%s", from "%s"', __filename, module.parent.id);

    this.define('fragment', function() {
      debug('running fragment');
      
    });
  };
};
