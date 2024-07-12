# grunt-typedoc2md

convert typedoc to markdown.

[![npm version](https://img.shields.io/npm/v/grunt-typedoc2md?color=blue)](https://www.npmjs.com/package/grunt-typedoc2md)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![jsdoc](https://img.shields.io/static/v1?label=jsdoc&message=%20api%20&color=blue)](https://jsdoc.app/)
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.svg)](https://gruntjs.com/)
[![codecov](https://codecov.io/gh/db-developer/grunt-typedoc2md/branch/master/graph/badge.svg)](https://codecov.io/gh/db-developer/grunt-typedoc2md)
[![Build Status](https://travis-ci.com/db-developer/grunt-typedoc2md.svg?branch=master)](https://travis-ci.com/db-developer/grunt-typedoc2md)
[![dependencies](https://img.shields.io/librariesio/release/npm/grunt-typedoc2md)](https://libraries.io/)

## content ##

* Usage (see further down this page)
  * [Getting started guide](#getting-started)
  * [Usage and examples](#usage)

* Developers
  * [Testing grunt-typedoc2md](docs/grunt.md#testing)
  * [Code coverage of tests for grunt-typedoc2md](docs/grunt.md#code-coverage)
  * [Build grunt-typedoc2md from scratch](docs/grunt.md#building)
  * [NPM integration of grunt-typedoc2md](docs/grunt.md#npm_integration)
  * [Frameworks used for testing, building, etc.](docs/frameworks.md)
  * [API of package grunt-typedoc2md](docs/api.index.md)

[Changelog](CHANGELOG.md)

## getting started ##

This guide assumes, that you are familiar with the use of
[npm](https://npmjs.com "Homepage of npm") and
[grunt](https://gruntjs.com "Homepage of grunt").  
The plugin can be installed by the following command:

<code>npm install grunt-typedoc2md --save-dev</code>

Once installed, the plugin may be loaded from within your gruntfile:

<code>grunt.loadNpmTasks( "grunt-typedoc2md" );</code>

Setup the task configuration as described below (see usage) and run the task:

<code>grunt call_npm</code>

Of cause, the task can be integrated into any complex build process.

## usage ##

The following examples assume that the grunt plugin 'load-grunt-config' is used.
Alternatively, the code can of course be integrated into the 'gruntfile.js' file.  

```javascript
// file typedoc2md.js
module.exports = function ( grunt, options ) {
  return {
    options: {
      "config": "./conf/typedoc/typedoc.json"           // MUST be of JSON format
    },
    always: {
    },
    other: {
      "config": "./conf/typedoc/other.typedoc.json",    // MUST be of JSON format
      "typedoc-plugin-markdown": false,                 // In case you explicitly may not want to create markdown ;-)
      "plugin": [ "any", "other", "typedoc", "plugin" ]
    }
  };
};
```

See [typedoc guide](https://typedoc.org/guides/overview/) for settings, that can be used in typedoc.json.
