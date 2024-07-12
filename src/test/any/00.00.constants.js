/**
 *  © 2024, slashlib.org.
 */
const grunt = require( "grunt" );

const name    = "typedoc2md";
const promise = new Promise(( resolve, reject ) => {
  // note: this requires a "typedoc2md.js" file in .conf/grunt (see gruntfile.js)
  grunt.task.registerMultiTask( name, `Test '${ name }' stuff`, function() {
    const task = this;
    resolve({ name, grunt, task });
  });
});

// run registered task using current gruntfile.js
// FUTURE: find a way to pass in some other config
grunt.tasks([ name ], undefined, () => {/* pass 'done' to avoid exit */});

const errmsg = "custom error in 0.0.constants.js";
module.exports.env = promise.then((  obj  ) => { return obj },
                                  ( error ) => { grunt.fail.warn( errmsg )});
