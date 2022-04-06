
/* IMPORT */

import db from 'mime-standard';

/* MAIN */

const mime2ext = ( mime: string ): string => {

  mime = mime.trim ().toLowerCase ();

  if ( !db.hasOwnProperty ( mime ) ) return '';

  return db[mime][0];

};

/* EXPORT */

export default mime2ext;
