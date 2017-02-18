'use strict';

require('mocha');
var assert = require('assert');
var moment = require('moment');
var File = require('vinyl');
var Permalinks = require('permalinks');
var dateHelpers = require('./');
var permalinks;

describe('permalinks-date-helpers', function() {
  beforeEach(function() {
    permalinks = new Permalinks();
  });

  it('should export a function', function() {
    assert.equal(typeof dateHelpers, 'function');
  });

  it('should use `:year` helper to set year', function() {
    var file = new File({
      path: 'foo/bar/baz.hbs',
      data: {
        title: 'First blog post',
        date: '2017-02-14',
      }
    });

    permalinks.use(dateHelpers());

    var url = permalinks.format(':year', file);
    assert.equal(url, moment(file.data.date).format('YYYY'));
  });

  it('should use `:month` helper to set month', function() {
    var file = new File({
      path: 'foo/bar/baz.hbs',
      data: {
        title: 'First blog post',
        date: '2017-02-14',
      }
    });

    permalinks.use(dateHelpers());

    var url = permalinks.format(':month', file);
    assert.equal(url, moment(file.data.date).format('MM'));
  });

  it('should use `:month` helper to set i_month', function() {
    var file = new File({
      path: 'foo/bar/baz.hbs',
      data: {
        title: 'First blog post',
        date: '2017-02-14',
      }
    });

    permalinks.use(dateHelpers());

    var url = permalinks.format(':i_month', file);
    assert.equal(url, moment(file.data.date).format('M'));
  });

  it('should use `:day` helper to set day', function() {
    var file = new File({
      path: 'foo/bar/baz.hbs',
      data: {
        title: 'First blog post',
        date: '2017-02-14',
      }
    });

    permalinks.use(dateHelpers());

    var url = permalinks.format(':day', file);
    assert.equal(url, moment(file.data.date).format('DD'));
  });

  it('should use `:day` helper to set i_day', function() {
    var file = new File({
      path: 'foo/bar/baz.hbs',
      data: {
        title: 'First blog post',
        date: '2017-02-14',
      }
    });

    permalinks.use(dateHelpers());

    var url = permalinks.format(':i_day', file);
    assert.equal(url, moment(file.data.date).format('D'));
  });

  it('should support `:date`', function() {
    var file = new File({
      path: 'foo/bar/baz.hbs',
      data: {
        title: 'First blog post',
        date: '2017-02-14',
      }
    });

    permalinks.use(dateHelpers());

    var defaultDate = permalinks.format(':date', file);
    assert.equal(defaultDate, moment(file.data.date).format('YYYY-MM-DD'));

    var defaultDate = permalinks.format(':date()', file);
    assert.equal(defaultDate, moment(file.data.date).format('YYYY-MM-DD'));
  });

  it('should support passing a format to `:date`', function() {
    var file = new File({
      path: 'foo/bar/baz.hbs',
      data: {
        title: 'First blog post',
        date: '2017-02-14',
      }
    });

    permalinks.use(dateHelpers());

    var d = permalinks.format(':date("D")', file);
    assert.equal(d, moment(file.data.date).format('D'));

    var m = permalinks.format(':date("M")', file);
    assert.equal(m, moment(file.data.date).format('M'));
  });

  it('should support passing a date and format to `:date`', function() {
    var file = new File({
      path: 'foo/bar/baz.hbs',
      data: {
        title: 'First blog post',
        date: '2017-02-14',
      }
    });

    permalinks.use(dateHelpers());

    var d = permalinks.format(':date("D")', file);
    assert.equal(d, moment(file.data.date).format('D'));

    var m = permalinks.format(':date("M")', file);
    assert.equal(m, moment(file.data.date).format('M'));
  });
});

