'use strict';

require('mocha');
var assert = require('assert');
var fragment = require('./');

describe('base-fragment-cache', function() {
  it('should export a function', function() {
    assert.equal(typeof fragment, 'function');
  });

  it('should export an object', function() {
    assert(fragment);
    assert.equal(typeof fragment, 'object');
  });

  it('should throw an error when invalid args are passed', function(cb) {
    try {
      fragment();
      cb(new Error('expected an error'));
    } catch (err) {
      assert(err);
      assert.equal(err.message, 'expected first argument to be a string');
      assert.equal(err.message, 'expected callback to be a function');
      cb();
    }
  });
});
