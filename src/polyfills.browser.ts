// TODO(gdi2290): switch to DLLs

// Polyfills

// import 'ie-shim'; // Internet Explorer 9 support

// import 'core-js/es6';
// Added parts of es6 which are necessary for your project or your browser support requirements.
import 'core-js/es6';
// see issue https://github.com/AngularClass/angular2-webpack-starter/issues/709
// import 'core-js/es6/promise';

import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

// if ('production' === ENV) {
//   // Production

// } else {

//   // Development
//   Error.stackTraceLimit = Infinity;

//   /* tslint:disable no-var-requires */
//   // require('zone.js/dist/long-stack-trace-zone');

// }
