/**
 *	index.js: grunt-typedoc2md/tasks
 *
 *  @module grunt-typedoc2md/tasks
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
const _m = { typedoc2md:  require( "./typedoc2md" )};

/**
 *  String table
 *  @ignore
 */
const _STRINGS = {
  REGISTERMULTITASKTYPEDOC2MD: "registerMultiTaskTypeDoc2MD",
  RUNTASKTYPEDOC2MD:           "runTaskTypeDoc2MD"
};

// Module exports:
/**
 *  Register a multitask for typedoc2md.
 *
 *  @see    Function [registerMultiTaskTypeDoc2MD]{@link typedoc2md.md#.registerMultiTaskTypeDoc2MD}
 *          published by module typedoc2md for a detailed function description.
 *
 *  @function module:grunt-typedoc2md/tasks.registerMultiTaskTypeDoc2MD
 *  @param  {grunt} grunt
 */
Object.defineProperty( module.exports, _STRINGS.REGISTERMULTITASKTYPEDOC2MD, {
  value:    _m.typedoc2md.registerMultiTaskTypeDoc2MD,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.RUNTASKTYPEDOC2MD,  {
  value:    _m.typedoc2md.runTaskTypeDoc2MD,
  writable: false, enumerable: true, configurable: false });
