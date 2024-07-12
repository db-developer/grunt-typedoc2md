/**
 *	tasks/typedoc2md.js: grunt-typedoc2md
 *
 *  @module grunt-typedoc2md/tasks/typedoc2md
 *
 *//*
 *  © 2024, slashlib.org.
 *
 *  tasks/typedoc2md.js is distributed WITHOUT ANY WARRANTY; without even the
 *  implied warranty of MERCHANTABILITY  or FITNESS FOR A PARTICULAR PURPOSE.
 *
 */
"use strict";

/**
 *  Module initializer
 *  @ignore
 */
const _m = {
  const:            require( "../constants" ),
  typedoc2mdopts:   require( "../options/typedoc2md" )
};

/**
 *  String table initializer
 *  @ignore
 */
function _init_STRINGS() {
  const executetypedoc2md = "executeTypeDoc2MD";
  const missingproperty   = "Missing property";

  return {
    ERROR_MSG_MISSING_OBJ:          `${ executetypedoc2md }: ${ missingproperty } 'obj'.`,
    ERROR_MSG_MISSING_CONFIG:       `${ executetypedoc2md }: ${ missingproperty } 'obj.config'.`,
    ERROR_MSG_MISSING_PLUGIN:       `${ executetypedoc2md }: ${ missingproperty } 'obj.typedoc-plugin-markdown'.`,
    EXECUTETYPEDOC2MD:              `${ executetypedoc2md }`,
    GETTYPEDOC:                     "getTypeDoc",
    PACKAGE:                        "typedoc",
    PLUGIN:                         "typedoc-plugin-markdown",
    READJSON:                       "readJSON",
    REGISTERMULTITASKTYPEDOC2MD:    "registerMultiTaskTypeDoc2MD",
    RUNTASKTYPEDOC2MD:              "runTaskTypeDoc2MD",
    STRING:                         "string"
  };
}

/**
 *  String table
 *  @ignore
 */
const _STRINGS = _init_STRINGS();

/**
 *  Tries to load typedoc package
 *  @returns module typedoc
 */
function getTypeDoc( grunt, pkg = _STRINGS.PACKAGE ) {
  try { return Promise.resolve( require( pkg ))}
  catch( e ) {
    if ( grunt ) { grunt.log.error( `missing dependency '${ pkg }'`, e )}
    return Promise.reject( e );
  }
}

/**
 *  Trys to lod configfile
 *  @param   {*} config 
 *  @returns {object}
 */
function readJSON( grunt, config ) {
  if (( config !== false ) && ((( typeof config === _STRINGS.STRING ) || ( config instanceof String )))) {
        let jsonobj = undefined;
        try { jsonobj = grunt.file.readJSON( config )}
        catch( e ) { grunt.log.error( `error reading config '${ config }'`, e )}
        return jsonobj;
  }
  else return undefined;
}

/**
 *  Return a promise for executing
 *
 *  @param  {grunt}       grunt the runtime 'instance' of grunt.
 *  @param  {grunt.task}  task  the current task
 *  @param  {Object}      obj   wrapper for options and arguments.
 */
function executeTypeDoc2MD( grunt, task, obj ) {
  return new Promise(( resolve, reject ) => {
    try {
      if ( ! obj ) {
           throw new Error( _STRINGS.ERROR_MSG_MISSING_OBJ );
      }
      else if (( obj?.config === undefined ) || ( obj?.config === null )) {
           throw new Error( _STRINGS.ERROR_MSG_MISSING_CONFIG );
      }
      else if (( obj[ _STRINGS.PLUGIN ] === undefined ) || ( obj[ _STRINGS.PLUGIN ] === null )) {
           throw new Error( _STRINGS.ERROR_MSG_MISSING_PLUGIN );
      }
      else getTypeDoc( grunt ).then(( typedoc ) => {
        const config  = readJSON( grunt, obj?.config ) || { };
        const logmsg = `Will execute: typedoc with config ${ JSON.stringify( config ) }`;

        /* istanbul ignore else */
        if ( obj?.dryrun === true ) {
            grunt.log.ok( logmsg );
            return resolve( obj );
        }
        else grunt.verbose.ok( logmsg );

        if ( obj[ _STRINGS.PLUGIN ] === true ) {
             if ( Array.isArray( config?.plugin )) {
                  if ( ! config.plugin.includes( _STRINGS.PLUGIN )) {
                       config.plugin.push( _STRINGS.PLUGIN );
                  }
             }
             else config.plugin = [ _STRINGS.PLUGIN ];
        }
        else if ( Array.isArray( config?.plugin )) {
             config.plugin.splice( config.plugin.indexOf( _STRINGS.PLUGIN ), 1 );
        }

        typedoc.Application.bootstrapWithPlugins( config ).then(( app ) => {
          return app.convert().then(( project ) => {
            return app.generateDocs( project, config.out );
          });
        }).then(( obj ) => { resolve( obj )}, ( error ) => { reject( error )});        
      }).catch(( error ) => { reject( error )}); 
    }
    catch( error ) { reject( error )}
  });
}

/**
 *  Run the 'call_npm' task.
 *
 *  @return {Promise} ... required by callee to terminate async call (on "then")
 */
function runTaskTypeDoc2MD( grunt, task ) {
  let    promise = _m.typedoc2mdopts.toArgs( grunt, task ); // prepare args for test runs ...
         promise = promise.then(( obj ) => { return executeTypeDoc2MD( grunt, task, obj )});
  return promise;
}

/**
 *  Registers the 'call_npm' multitask.
 *
 *  @param  {grunt} grunt
 */
function registerMultiTaskTypeDoc2MD( grunt ) {
  grunt.registerMultiTask( _m.const.TASKNAME_TYPEDOC2MD, _m.const.TASKDESCRIPTION_TYPEDOC2MD,
    /* istanbul ignore next */ function () {
      const task = this;
      const done = task.async();
      runTaskTypeDoc2MD( grunt, task ).then((       ) => { done()},
                                            ( error ) => { grunt.log.error( error ); done( false )});
  });
}

// Module exports:
Object.defineProperty( module.exports, _STRINGS.EXECUTETYPEDOC2MD, {
  value:    executeTypeDoc2MD,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.GETTYPEDOC,        {
  value:    getTypeDoc,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.READJSON,          {
  value:    readJSON,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.REGISTERMULTITASKTYPEDOC2MD, {
  value:    registerMultiTaskTypeDoc2MD,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.RUNTASKTYPEDOC2MD, {
  value:    runTaskTypeDoc2MD,
  writable: false, enumerable: true, configurable: false });
