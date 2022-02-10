
/* IMPORT */

import {describe} from 'ava-spec';
import mm from 'mime';
import {default as mime2ext} from '../dist';
import {TESTS} from './fixtures';

/* MIME 2 EXT */

describe ( 'mime2ext', it => {

  it ( 'returns the same extensions as mime', t => {

    for ( const mime in TESTS ) {

      t.is ( mime2ext ( mime ), mm.getExtension ( mime ) );

    }

  });

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
