
/* IMPORT */

import {MIME_FULL, MIME_SHORT} from './consts';

/* MIME 2 EXT */

const re = /^.*\/((.*?)(?:\+.+)?)$/;

function mime2ext ( mime: string ): string {

  mime = mime.trim ().toLowerCase ();

  const full = MIME_FULL[mime];

  if ( full ) return full;

  const match = re.exec ( mime );

  if ( !match ) return '';

  return MIME_SHORT[match[1]] || match[2];

}

/* EXPORT */

export default mime2ext;
