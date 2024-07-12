/**
 *  © 2024, slashtasks.org.
 */
const expect    = require( "expect.js"   );

( async function() {
  const constants = require( "./00.00.constants" );
  const env       = await constants.env;

  describe( "03.00.tasks.typedoc2md.spec.js - Testing module 'lib/task/typedoc2md.js'", () => {
    const tasks   = require( "../../lib/tasks/typedoc2md"   );
    const options = require( "../../lib/options/typedoc2md" );

    describe( "Testing exports of module 'typedoc2md'", () => {
      it( "Function 'executeTypeDoc2MD' should exist", () => {
          expect( tasks.executeTypeDoc2MD ).not.to.be( undefined  );
          expect( tasks.executeTypeDoc2MD ).not.to.be( null       );
          expect( tasks.executeTypeDoc2MD ).to.be.a(   "function" );
      });
      it( "Function 'getTypeDoc' should exist", () => {
          expect( tasks.getTypeDoc        ).not.to.be( undefined  );
          expect( tasks.getTypeDoc        ).not.to.be( null       );
          expect( tasks.getTypeDoc        ).to.be.a(   "function" );
      });
      it( "Function 'readJSON' should exist", () => {
          expect( tasks.readJSON          ).not.to.be( undefined  );
          expect( tasks.readJSON          ).not.to.be( null       );
          expect( tasks.readJSON          ).to.be.a(   "function" );
      });
      it( "Function 'registerMultiTaskTypeDoc2MD' should exist", () => {
          expect( tasks.registerMultiTaskTypeDoc2MD ).not.to.be( undefined  );
          expect( tasks.registerMultiTaskTypeDoc2MD ).not.to.be( null       );
          expect( tasks.registerMultiTaskTypeDoc2MD ).to.be.a(   "function" );
      });
      it( "Function 'runTaskTypeDoc2MD' should exist", () => {
          expect( tasks.runTaskTypeDoc2MD ).not.to.be( undefined  );
          expect( tasks.runTaskTypeDoc2MD ).not.to.be( null       );
          expect( tasks.runTaskTypeDoc2MD ).to.be.a(   "function" );
      });
    });
    describe( "Testing function 'getTypeDoc' of module 'typedoc2md'", () => {
      it( "should be callable without parameters and resolve", ( done ) => {
          // this resolves, because the package 'typedoc' is part of 'developer dependencies' by package.js
          expect(() => { tasks.getTypeDoc()
                              .then(( value ) => { done()},
                                    ( error ) => { done( error )})
                              .catch(( error ) => { done( error ); });
                       }).not.to.throwException();            
      }).timeout( 5000 );
      it( "should be callable with parameters and get rejected (0)", ( done ) => {
          const errmsg = "Cannot find module 'no-such-package'";
          expect(() => { tasks.getTypeDoc( undefined, "no-such-package" )
                              .then(( value ) => { done( new Error( "Should be rejected!" )); },
                                    ( error ) => {
                                      // console.log( error );
                                      expect( error ).to.be.an( Error );
                                      expect( error.message.startsWith( errmsg )).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); });
                       }).not.to.throwException();            
      });
      it( "should be callable with parameters and get rejected (1)", ( done ) => {
          const errmsg = "Cannot find module 'no-such-package'";
          expect(() => { tasks.getTypeDoc( env.grunt, "no-such-package" )
                              .then(( value ) => { done( new Error( "Should be rejected!" )); },
                                    ( error ) => {
                                      // console.log( error );
                                      expect( error ).to.be.an( Error );
                                      expect( error.message.startsWith( errmsg )).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); });
                       }).not.to.throwException();
      });
    });
    describe( "Testing function 'readJSON' of module 'typedoc2md'", () => {
      it( "should be callable without parameters", ( done ) => {
          expect(() => {  const jsonobj = tasks.readJSON()
                          expect( jsonobj ).to.be( undefined );
                          done();
                       }).not.to.throwException(( error ) => { done( error )});
      });
      it( "should be callable with parameter 'grunt'", ( done ) => {
          const config = ".conf/typedoc/does-not-exist.json";
          expect(() => {  const jsonobj = tasks.readJSON( env.grunt )
                          expect( jsonobj ).to.be( undefined );
                          done();
                       }).not.to.throwException(( error ) => { done( error )});
      });
      it( "should be callable with parameter 'config' and fail", ( done ) => {
          const config = ".conf/typedoc/does-not-exist.json";
          const errmsg = "Cannot read properties of undefined (reading 'log')"
          expect(() => {  const jsonobj = tasks.readJSON( undefined, config )
                          done( new Error( "Should be rejected!" ));
                       }).to.throwException(( error ) => {
                          // console.log( error );
                          expect( error ).to.be.an( Error );
                          expect( error.message.startsWith( errmsg )).to.be.ok();
                          done();
                       });
      });
      it( "should be callable with parameters 'grunt' and 'config' (0)", ( done ) => {
          const config = ".conf/typedoc/does-not-exist.json";
          expect(() => {  const jsonobj = tasks.readJSON( env.grunt, config )
                          expect( jsonobj ).to.be( undefined );
                          done();
                       }).to.throwException(( error ) => { done( error )})
      });
      it( "should be callable with parameters 'grunt' and 'config' (1)", ( done ) => {
          const config = ".conf/typedoc/typedoc.json";
          expect(() => {  const jsonobj = tasks.readJSON( env.grunt, config )
                          // console.log( jsonobj );
                          expect( jsonobj ).not.to.be( undefined );
                          expect( jsonobj ).not.to.be( null      );
                          expect( jsonobj ).to.be.an(  "object"  );
                          done();
                       }).to.throwException(( error ) => { done( error )})
      });
    });
    describe( "Testing function 'executeTypeDoc2MD' of module 'typedoc2md'", () => {
      it( "should be callable without parameters but get rejected", ( done ) => {
          const errmsg = "executeTypeDoc2MD: Missing property 'obj'.";
          expect(() => { tasks.executeTypeDoc2MD()
                              .then(( value ) => { done( new Error( "Should be rejected!" ))},
                                    ( error ) => {
                                      // console.log( error );
                                      expect( error ).to.be.an( Error );
                                      expect( error.message === errmsg ).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); });
                       }).not.to.throwException();
      });
      it( "should be callable with parameter 'obj' {object} but get rejected (0)", ( done ) => {
          const errmsg  = "executeTypeDoc2MD: Missing property 'obj.config'.";
          expect(() => { tasks.executeTypeDoc2MD( undefined, undefined, { })
                              .then(( value ) => { done( new Error( "Should be rejected!" )); },
                                    ( error ) => {
                                      // console.log( error );
                                      expect( error ).to.be.an( Error );
                                      expect( error.message === errmsg ).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); });
                       }).not.to.throwException();
      });
      it( "should be callable with parameter 'obj' {object} but get rejected (1)", ( done ) => {
          const config  = false;
          const errmsg  = "executeTypeDoc2MD: Missing property 'obj.typedoc-plugin-markdown'.";
          expect(() => { tasks.executeTypeDoc2MD( undefined, undefined, { config })
                              .then(( value ) => { done( new Error( "Should be rejected!" )); },
                                    ( error ) => {
                                      // console.log( error );
                                      expect( error ).to.be.an( Error );
                                      expect( error.message === errmsg ).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); });
                       }).not.to.throwException();
      });
      it( "should be callable with parameter 'obj' {object} but get rejected (2)", ( done ) => {
          const config  = false;
          const dryrun  = true;
          const errmsg  = "Cannot read properties of undefined (reading 'log')";
          expect(() => { tasks.executeTypeDoc2MD( undefined, undefined, { config, dryrun, "typedoc-plugin-markdown": false })
                              .then(( value ) => { done( new Error( "Should be rejected!" )); },
                                    ( error ) => {
                                      // console.log( error );
                                      expect( error ).to.be.a( TypeError );
                                      expect( error.message === errmsg ).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); });
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' and 'obj' {object} and resolve (3)", ( done ) => {
          const config  = false;
          const dryrun  = true;
          expect(() => { tasks.executeTypeDoc2MD( env.grunt, undefined, { config, dryrun, "typedoc-plugin-markdown": false })
                              .then((  value ) => { done()})
                              .catch(( error ) => { done( error )});
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' and 'obj' {object} but get rejected (4)", ( done ) => {
          const config  = false;
          const errmsg  = "The \"paths[0]\" argument must be of type string. Received undefined";
          expect(() => { tasks.executeTypeDoc2MD( env.grunt, undefined, { config, "typedoc-plugin-markdown": false })
                              .then(( value ) => { done( new Error( "Should be rejected!" )); },
                                    ( error ) => {
                                      // console.log( error );
                                      expect( error ).to.be.a( TypeError );
                                      expect( error.message === errmsg ).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error )});
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' and 'obj' {object} but get rejected (5)", ( done ) => {
          const config  = ".conf/typedoc/typedoc.json";
          expect(() => { tasks.executeTypeDoc2MD( env.grunt, undefined, { config, "typedoc-plugin-markdown": false })
                              .then((  value ) => { done()})
                              .catch(( error ) => { done( error )});
                       }).not.to.throwException();
      }).timeout( 40000 );
      it( "should be callable with parameters 'grunt' and 'obj' {object} but get rejected (6)", ( done ) => {
          const config  = ".conf/typedoc/typedoc.json";
          expect(() => { tasks.executeTypeDoc2MD( env.grunt, undefined, { config, "typedoc-plugin-markdown": true })
                              .then((  value ) => { done()})
                              .catch(( error ) => { done( error )});
                       }).not.to.throwException();
      }).timeout( 40000 );
      it( "should be callable with parameters 'grunt' and 'obj' {object} but get rejected (7)", ( done ) => {
          const config  = ".conf/typedoc/other.1.typedoc.json";
          expect(() => { tasks.executeTypeDoc2MD( env.grunt, undefined, { config, "typedoc-plugin-markdown": true })
                              .then((  value ) => { done()})
                              .catch(( error ) => { done( error )});
                       }).not.to.throwException();
      }).timeout( 40000 );
      it( "should be callable with parameters 'grunt' and 'obj' {object} but get rejected (8)", ( done ) => {
          const config  = ".conf/typedoc/other.1.typedoc.json";
          expect(() => { tasks.executeTypeDoc2MD( env.grunt, undefined, { config, "typedoc-plugin-markdown": false })
                              .then((  value ) => { done()})
                              .catch(( error ) => { done( error )});
                       }).not.to.throwException();
      }).timeout( 40000 );
      it( "should be callable with parameters 'grunt' and 'obj' {object} but get rejected (9)", ( done ) => {
          const config  = ".conf/typedoc/other.2.typedoc.json";
          expect(() => { tasks.executeTypeDoc2MD( env.grunt, undefined, { config, "typedoc-plugin-markdown": true })
                              .then((  value ) => { done()})
                              .catch(( error ) => { done( error )});
                       }).not.to.throwException();
      }).timeout( 40000 );
    });
    describe( "Testing function 'runTaskTypeDoc2MD' of module 'typedoc2md'", () => {
      it( "should be callable without parameters but get rejected", ( done ) => {
          const errmsg = "typedoc2md.js - Function 'toArgs': missing parameter 'grunt'.";
          expect(() => { tasks.runTaskTypeDoc2MD()
                              .then(( value ) => { done( new Error( "Should be rejected!" )); },
                                    ( error ) => {
                                      // console.log( error );
                                      expect( error ).to.be.an( Error );
                                      expect( error.message === errmsg ).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); });
                       }).not.to.throwException();
      });
      it( "should be callable without parameter 'grunt' {grunt} but get rejected", ( done ) => {
          const errmsg = "typedoc2md.js - Function 'toArgs': missing parameter 'task'.";
          expect(() => { tasks.runTaskTypeDoc2MD( env.grunt )
                              .then(( value ) => { done( new Error( "Should be rejected!" ))},
                                    ( error ) => {
                                      // console.log( error );
                                      expect( error ).to.be.an( Error );
                                      expect( error.message === errmsg ).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); });
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt} and 'task' {task} but get rejected", ( done ) => {
          const errmsg = "The \"path\" argument must be of type string. Received undefined";
          expect(() => { tasks.runTaskTypeDoc2MD( env.grunt, env.task )
                              .then(( value ) => { done( new Error( "Should be rejected!" ))},
                                    ( error ) => {
                                      // console.log( message );
                                      expect( error ).to.be.an( TypeError );
                                      expect( error.message === errmsg ).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { console.error( error ); done( error ); });
                       }).not.to.throwException();
      }).timeout( 40000 );
    });
    describe( "Testing function 'registerMultiTaskTypeDoc2MD' of module 'typedoc2md'", () => {
      const errmsg      = "Cannot read property 'registerMultiTask' of undefined";
      const errmsg_v_16 = "Cannot read properties of undefined (reading 'registerMultiTask')"
      it( "should not be callable without parameters", () => {
          expect(() => { tasks.registerMultiTaskTypeDoc2MD(); }).to.throwException(( error ) => {
            // console.log( error );
            expect( error ).to.be.an( Error );
            expect(( error.message === errmsg ) || ( error.message === errmsg_v_16 )).to.be.ok();
          });
      });
      it( "should be callable with parameter 'grunt' {grunt}", () => {
          expect(() => { tasks.registerMultiTaskTypeDoc2MD( env.grunt ); }).not.to.throwException();
      });
    });
  });
})();
