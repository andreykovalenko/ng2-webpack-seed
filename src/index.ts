// import _ from 'lodash';
import moment from 'moment';
import R from 'ramda';

import a from './a';

a();
function component () {
  var appEl = document.getElementById('app');

  /* lodash is required for the next line to work */
  // appEl.innerHTML = _.join(['Hello','webpack'], ' ');

  // console.log('lodash is reference:', _.VERSION);
  console.log('moment is reference:', moment.version);
  console.log(moment().format());
  console.log('-----RAMDA---->', R);
  console.log('BLAH')

  return appEl;
}

component();