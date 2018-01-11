'use strict';

const toRegexRange = require('to-regex-range');
const year = require('year');
let dateRegex;

module.exports = function(options) {
  const opts = Object.assign({moment: require('moment')}, options);
  const moment = opts.moment;

  return function(permalinks) {

    /**
     * Add date-related variables to the context for each file
     */

    permalinks.context(function(file, context) {
      const mod = file.data.date || (file.stat && file.stat.mtime) || new Date();

      Object.defineProperty(context, '_date', {
        configurable: true,
        get: function() {
          return moment(mod).utc();
        }
      });

      getter(context, 'year', 'YYYY');
      getter(context, 'month', 'MM');
      getter(context, 'hour', 'H');
      getter(context, 'minute', 'm');
      getter(context, 'second', 's');
      getter(context, 'i_month', 'M');
      getter(context, 'day', 'DD');
      getter(context, 'i_day', 'D');
    });

    /**
     * Uses moment to create a formatted date string from the
     * given `format` and optional `date`.
     *
     * ```js
     * permalinks.format(':date', file);
     * //=> '2017-02-15'
     * permalinks.format(':date()', file);
     * //=> '2017-02-15'
     * permalinks.format(':date("MM")', file);
     * //=> '02'
     * permalinks.format(':date("YYYY")', file);
     * //=> '2017'
     * permalinks.format(':date("DD")', file);
     * //=> '15'
     * permalinks.format(':date("dddd, MMMM Do YYYY, h:mm:ss a")', file);
     * //=> 'Sunday, February 14th 2017, 3:25:50 pm'
     * permalinks.format(':slugify(date("dddd, MMMM Do YYYY, h:mm:ss a"))', file);
     * //=> 'sunday-february-14th-2017-3-25-50-pm'
     * ```
     * @name :date
     * @param {String} `format`
     * @param {String|Date} `date`
     * @return {String}
     * @api public
     */

    permalinks.helper('date', function(format, date) {
      let mmt = this.context._date;
      if (isValidDate(format)) {
        mmt = moment(format);
        format = null;
      }
      if (typeof date === 'string') {
        mmt = moment(date);
      }
      if (typeof format === 'string') {
        return mmt.format(format);
      }
      return mmt.format('YYYY-MM-DD');
    });
  };
};

function isValidDate(date, options) {
  return typeof date === 'string' && toRegex(options).test(date);
}

function toRange(options) {
  // "1989" is the year Tim Berners Lee invented the world wide web. It's unlikely
  // that the year of a valid blog post date would be any earlier than that.
  const yearRegex = '(?:' + toRegexRange('1989', year()) + ')';
  const monthRegex = '(?:0?' + toRegexRange('1', '12') + ')';
  const dayRegex = '(?:0?' + toRegexRange('1', '12') + ')';
  return [yearRegex, monthRegex, dayRegex].join('[-\\/ ]');
}

function toRegex(options) {
  return dateRegex || (dateRegex = new RegExp(`^${toRange(options)}(?: |$)`));
}

function getter(context, name, prop) {
  Object.defineProperty(context, name, {
    configurable: true,
    get: function() {
      return context._date.format(prop);
    }
  });
}
