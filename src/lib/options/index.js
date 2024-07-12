
/**
 *	index.js: grunt-typedoc2md/options
 *
 *  @module grunt-typedoc2md/options
 *
 *//*
 *  © 2024, slashlib.org.
 *
 *  index.js  is distributed WITHOUT ANY WARRANTY; without even the implied
 *  warranty  of  MERCHANTABILITY  or  FITNESS  FOR  A PARTICULAR  PURPOSE.
 *
 */
"use strict";

/**
 *  Module table
 *  @ignore
 */
const _m = { typedoc2md: require( "./typedoc2md" )};

/**
 *  String table
 *  @ignore
 */
const _STRINGS = { TOTYPEDOC2MDARGS: "toTypeDoc2MDArgs" };

// Module exports:
/**
 *  Register a multitask for typedoc2md.
 *
 *  @see    Function [toArgs]{@link typedoc2md.md#.toArgs}
 *          published by module typedoc2md for a detailed function description.
 *
 *  @function module:grunt-typedoc2md/options.toArgs
 *  @param  {grunt}           grunt
 *  @param  {grunt.task}      task
 *
 *  @return {Promise<Object>} obj
 *  @return {Array<strings>}  obj.args  an array of arguments
 *  @return {Array<any>}      obj.opts  an array of options
 */
Object.defineProperty( module.exports, _STRINGS.TOTYPEDOC2MDARGS, {
  value:    _m.typedoc2md.toArgs,
  writable: false, enumerable: true, configurable: false });
