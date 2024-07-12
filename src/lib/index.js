/**
 *	Package interface of grunt-typedoc2md<br />
 *  All static members of this module are available for 3rd party access.
 *
 *  @module grunt-typedoc2md
 *
 *//*
 *  © 2024, slashlib.org.
 *
 *  index.js is distributed WITHOUT ANY WARRANTY; without even the implied
 *  warranty of  MERCHANTABILITY  or  FITNESS  FOR  A PARTICULAR  PURPOSE.
 *
 */
"use strict";

/**
 *  Module table
 *  @ignore
 */
const _m = {
  tasks:    require( "./tasks" )
}

/**
 *  String table
 *  @ignore
 */
const _STRINGS = {
  REGISTERMULTITASKTYPEDOC2MD: "registerMultiTaskTypeDoc2MD",
}

// Module exports:
/**
 *  Register a multitask for typedoc2md.
 *
 *  @see    Function [registerMultiTaskTypeDoc2MD]{@link tasks/index.md#.registerMultiTaskTypeDoc2MD}
 *          published by module tasks for a detailed function description.
 *
 *  @function module:grunt-typedoc2md.registerMultiTaskTypeDoc2MD
 *  @param  {grunt} grunt
 */
Object.defineProperty( module.exports, _STRINGS.REGISTERMULTITASKTYPEDOC2MD, {
  value:    _m.tasks.registerMultiTaskTypeDoc2MD,
  writable: false, enumerable: true, configurable: false });
