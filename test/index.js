
/* IMPORT */

import {describe} from 'fava';
import mime2ext from '../dist/index.js';
import {TESTS} from './fixtures.js';

/* MAIN */

describe ( 'mime2ext', it => {

  it ( 'supports popular mime types', t => {

    const results = {};

    Object.keys ( TESTS ).forEach ( mime => {

      results[mime] = mime2ext ( mime );

    });

    t.deepEqual ( results, TESTS );

  });

  it ( 'supports weird casing', t => {

    t.is ( mime2ext ( '  audio/mP3  ' ), 'mp3' );

  });

  it ( 'falls back to an empty string for unknown mime types', t => {

    t.is ( mime2ext ( 'unknown' ), '' );

  });

});
