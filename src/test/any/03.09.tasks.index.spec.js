/**
 *  © 2024, slashtasks.org.
 */
const expect    = require( "expect.js"   );

( async function() {
  const constants = require( "./00.00.constants" );
  const env       = await constants.env;

  describe( "03.09.tasks.index.spec.js - Testing module 'lib/tasks/index.js'", () => {
    const tasks   = require( "../../lib/tasks" );

    describe( "Testing exports of module 'tasks'", () => {
      it( "Function 'registerMultiTaskTypeDoc2MD' should exist", () => {
          expect( tasks.registerMultiTaskTypeDoc2MD ).not.to.be( undefined  );
          expect( tasks.registerMultiTaskTypeDoc2MD ).not.to.be( null       );
          expect( tasks.registerMultiTaskTypeDoc2MD ).to.be.a(   "function" );
      });
      it( "Function 'runTaskTypeDoc2MD' should exist", () => {
          expect( tasks.runTaskTypeDoc2MD           ).not.to.be( undefined  );
          expect( tasks.runTaskTypeDoc2MD           ).not.to.be( null       );
          expect( tasks.runTaskTypeDoc2MD           ).to.be.a(   "function" );
      });
    });
  });
})();
