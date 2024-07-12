/**
 *  © 2024, slashlib.org.
 */
const expect = require( "expect.js" );

( async function() {
  const constants = require( "./00.00.constants" );
  const env       = await constants.env;

  describe( "02.09.options.index.spec.js - Testing module 'lib/options/index.js'", () => {
    const options = require( "../../lib/options" );

    describe( "Testing exports of module 'options'", () => {
      it( "Function 'toTypeDoc2MDArgs' should exist", () => {
          expect( options.toTypeDoc2MDArgs ).not.to.be( undefined  );
          expect( options.toTypeDoc2MDArgs ).not.to.be( null       );
          expect( options.toTypeDoc2MDArgs ).to.be.a(   "function" );
      });
    });
  });
})();
