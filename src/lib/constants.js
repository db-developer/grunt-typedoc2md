
/**
 *	constants.js: grunt-typedoc2md
 *
 *  @module grunt-typedoc2md/constants
 *
 *//*
 *  © 2024, db-developer.
 *
 *  constants.js  is distributed  WITHOUT  ANY WARRANTY;  without  even  the
 *  implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * 
 */
"use strict";

/**
 *  String table
 *  @ignore
 */
const _STRINGS = {
  PROPERTY_TASKNAME_TYPEDOC2MD:    "TASKNAME_TYPEDOC2MD",
  PROPERTY_TASKDESC_TYPEDOC2MD:    "TASKDESCRIPTION_TYPEDOC2MD",
  TASKNAME_TYPEDOC2MD:             "typedoc2md",
  TASKDESCRIPTION_TYPEDOC2MD:      "Check package.json for dependencies"
};

// Module exports:
Object.defineProperty( module.exports, _STRINGS.PROPERTY_TASKNAME_TYPEDOC2MD, {
  value:    _STRINGS.TASKNAME_TYPEDOC2MD,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.PROPERTY_TASKDESC_TYPEDOC2MD, {
  value:    _STRINGS.TASKDESCRIPTION_TYPEDOC2MD,
  writable: false, enumerable: true, configurable: false });
