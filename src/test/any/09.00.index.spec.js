/**
 *  © 2024, slashlib.org.
 */
const expect    = require( "expect.js"   );

( async function() {
  const constants = require( "./00.00.constants" );
  const env       = await constants.env;

  describe( "09.00.index.spec.js - Testing module 'lib/index.js'", () => {
    const idx     = require( "../../lib/index" );

    describe( "Testing exports of module 'index'", () => {
      it( "Function 'registerMultiTaskTypeDoc2MD' should exist", () => {
          expect( idx.registerMultiTaskTypeDoc2MD ).not.to.be( undefined  );
          expect( idx.registerMultiTaskTypeDoc2MD ).not.to.be( null       );
          expect( idx.registerMultiTaskTypeDoc2MD ).to.be.a(   "function" );
      });
    });
  });
})();
