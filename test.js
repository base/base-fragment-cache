'use strict';

require('mocha');
var assert = require('assert');
var Base = require('base');
var fragment = require('./');

describe('base-fragment-cache', function() {
  it('should export a function', function() {
    assert.equal(typeof fragment, 'function');
  });

  it('should expose a `fragment` object on the instance', function() {
    var base = new Base();
    base.use(fragment());

    assert.equal(typeof base.fragment, 'object');
  });

  it('should allow property name to be customized', function() {
    var base = new Base();
    base.use(fragment({name: 'foo'}));

    assert.equal(typeof base.foo, 'object');
  });

  it('should create a cache', function() {
    var base = new Base();
    base.use(fragment());

    base.fragment.set('foo', 'one', 'two');
    assert(base.fragment.caches.hasOwnProperty('foo'));
  });

  it('should set values on cache', function() {
    var base = new Base();
    base.use(fragment());

    base.fragment.set('foo', 'one', 'two');
    assert(base.fragment.caches.hasOwnProperty('foo'));
    assert(base.fragment.caches.foo.__data__.hasOwnProperty('one'));
    assert.equal(base.fragment.caches.foo.__data__.one, 'two');
  });

  it('should get values from a cache', function() {
    var base = new Base();
    base.use(fragment());
    base.fragment.set('foo', 'one', 'two');
    assert.equal(base.fragment.get('foo', 'one'), 'two');
  });
});
