# permalinks-date-helpers [![NPM version](https://img.shields.io/npm/v/permalinks-date-helpers.svg?style=flat)](https://www.npmjs.com/package/permalinks-date-helpers) [![NPM monthly downloads](https://img.shields.io/npm/dm/permalinks-date-helpers.svg?style=flat)](https://npmjs.org/package/permalinks-date-helpers) [![NPM total downloads](https://img.shields.io/npm/dt/permalinks-date-helpers.svg?style=flat)](https://npmjs.org/package/permalinks-date-helpers) [![Linux Build Status](https://img.shields.io/travis/permalinks/permalinks-date-helpers.svg?style=flat&label=Travis)](https://travis-ci.org/permalinks/permalinks-date-helpers)

> Plugin for Permalinks that adds date helpers and variables to the context.

Please consider following this project's author, [Jon Schlinkert](https://github.com/jonschlinkert), and consider starring the project to show your :heart: and support.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save permalinks-date-helpers
```

## Usage

```js
var dateHelpers = require('permalinks-date-helpers');
var Permalinks = require('permalinks');
var permalinks = new Permalinks();

permalinks.use(dateHelpers());
var file = {path: 'posts/about.md', data: {date: '2017-02-02'}};
permalinks.format(':year/:month/:day/:stem/index.html');
//=> '2017/02/02/about/index.html'

permalinks.format(':date("YYYY/MM/DD")/:stem/index.html');
//=> '2017/02/02/about/index.html'
```

## Helpers

### [:date](index.js#L64)

Uses moment to create a formatted date string from the given `format` and optional `date`.

**Params**

* `format` **{String}**
* `date` **{String|Date}**
* `returns` **{String}**

**Example**

```js
permalinks.format(':date', file);
//=> '2017-02-15'
permalinks.format(':date()', file);
//=> '2017-02-15'
permalinks.format(':date("MM")', file);
//=> '02'
permalinks.format(':date("YYYY")', file);
//=> '2017'
permalinks.format(':date("DD")', file);
//=> '15'
permalinks.format(':date("dddd, MMMM Do YYYY, h:mm:ss a")', file);
//=> 'Sunday, February 14th 2017, 3:25:50 pm'
permalinks.format(':slugify(date("dddd, MMMM Do YYYY, h:mm:ss a"))', file);
//=> 'sunday-february-14th-2017-3-25-50-pm'
```

## Variables

In addition to the [date](#date) helper itself, the following variables will be exposed on the context as a result of registering the `date` helper (these aren't helpers, just strings):

| **Name** | **Description** | **Example** | 
| --- | --- | --- |
| `:year` | Published year of posts (4-digit) | `2017` |
| `:month` | Published month of posts (2-digit) | `09` |
| `:i_month` | Published month of posts (Without leading zeros) | `9` |
| `:day` | Published day of posts (2-digit) | `02` |
| `:i_day` | Published day of posts (Without leading zeros) | `2` |
| `:hour` | Hour of the day | `11` |
| `:minute` | Minute of the hour | `15` |
| `:second` | Second of the minute | `45` |

## About

<details>
<summary><strong>Contributing</strong></summary>

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

Please read the [contributing guide](.github/contributing.md) for advice on opening issues, pull requests, and coding standards.

</details>

<details>
<summary><strong>Running Tests</strong></summary>

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

</details>
<details>
<summary><strong>Building docs</strong></summary>

_(This project's readme.md is generated by [verb](https://github.com/verbose/verb-generate-readme), please don't edit the readme directly. Any changes to the readme must be made in the [.verb.md](.verb.md) readme template.)_

To generate the readme, run the following command:

```sh
$ npm install -g verbose/verb#dev verb-generate-readme && verb
```

</details>

### Related projects

You might also be interested in these projects:

* [gulp-permalinks](https://www.npmjs.com/package/gulp-permalinks): Gulp plugin for easily creating permalinks for vinyl files. | [homepage](https://github.com/doowb/gulp-permalinks "Gulp plugin for easily creating permalinks for vinyl files.")
* [permalinks](https://www.npmjs.com/package/permalinks): Easily add powerful permalink or URL routing/URL rewriting capablities to any node.js project. Can be… [more](https://github.com/permalinks/permalinks) | [homepage](https://github.com/permalinks/permalinks "Easily add powerful permalink or URL routing/URL rewriting capablities to any node.js project. Can be used in static site generators, build systems, web applications or anywhere you need to do path or URL transformation.")
* [static-rewrite](https://www.npmjs.com/package/static-rewrite): Easily generate destination paths or static URLs by mapping user-friendly patterns to server-side build paths. | [homepage](https://github.com/permalinks/static-rewrite "Easily generate destination paths or static URLs by mapping user-friendly patterns to server-side build paths.")

### Author

**Jon Schlinkert**

* [linkedin/in/jonschlinkert](https://linkedin.com/in/jonschlinkert)
* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](https://twitter.com/jonschlinkert)

### License

Copyright © 2018, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT License](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.6.0, on January 11, 2018._