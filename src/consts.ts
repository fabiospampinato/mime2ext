
/* CONSTS */

const MIME_FULL = {
  /* APPLICATION */
  'application/mp4': 'mp4s',
  'application/ogg': 'ogx',
  /* AUDIO */
  'audio/mp4': 'm4a',
  'audio/mpeg': 'mpga',
  'audio/ogg': 'oga',
  'audio/webm': 'weba',
  /* VIDEO */
  'video/3gpp': '3gp',
  'video/jpeg': 'jpgv',
  'video/ogg': 'ogv'
};

const MIME_SHORT = {
  /* APPLICATION */
  'andrew-inset': 'ez',
  'applixware': 'aw',
  'cdmi-capability': 'cdmia',
  'cdmi-container': 'cdmic',
  'cdmi-domain': 'cdmid',
  'cdmi-object': 'cdmio',
  'cdmi-queue': 'cdmiq',
  'cu-seeme': 'cu',
  'dash+xml': 'mpd',
  'docbook+xml': 'dbk',
  'dssc+xml': 'xdssc',
  'ecmascript': 'ecma',
  'font-tdpfr': 'pfr',
  'geo+json': 'geojson',
  'gzip': 'gz',
  'hyperstudio': 'stk',
  'inkml+xml': 'ink',
  'java-archive': 'jar',
  'java-serialized-object': 'ser',
  'java-vm': 'class',
  'javascript': 'js',
  'ld+json': 'jsonld',
  'lost+xml': 'lostxml',
  'mac-binhex40': 'hqx',
  'mac-compactpro': 'cpt',
  'manifest+json': 'webmanifest',
  'marc': 'mrc',
  'marcxml+xml': 'mrcx',
  'mathematica': 'ma',
  'mediaservercontrol+xml': 'mscml',
  'metalink4+xml': 'meta4',
  'mp21': 'm21',
  'msword': 'doc',
  'n-quads': 'nq',
  'n-triples': 'nt',
  'octet-stream': 'bin',
  'oebps-package+xml': 'opf',
  'onenote': 'onetoc',
  'patch-ops-error+xml': 'xer',
  'pgp-encrypted': 'pgp',
  'pgp-signature': 'asc',
  'pics-rules': 'prf',
  'pkcs10': 'p10',
  'pkcs7-mime': 'p7m',
  'pkcs7-signature': 'p7s',
  'pkcs8': 'p8',
  'pkix-attr-cert': 'ac',
  'pkix-cert': 'cer',
  'pkix-crl': 'crl',
  'pkix-pkipath': 'pkipath',
  'pkixcmp': 'pki',
  'postscript': 'ai',
  'pskc+xml': 'pskcxml',
  'reginfo+xml': 'rif',
  'relax-ng-compact-syntax': 'rnc',
  'resource-lists-diff+xml': 'rld',
  'resource-lists+xml': 'rl',
  'rls-services+xml': 'rs',
  'rpki-ghostbusters': 'gbr',
  'rpki-manifest': 'mft',
  'rpki-roa': 'roa',
  'scvp-cv-request': 'scq',
  'scvp-cv-response': 'scs',
  'scvp-vp-request': 'spq',
  'scvp-vp-response': 'spp',
  'set-payment-initiation': 'setpay',
  'set-registration-initiation': 'setreg',
  'sieve': 'siv',
  'smil+xml': 'smi',
  'sparql-query': 'rq',
  'sparql-results+xml': 'srx',
  'srgs': 'gram',
  'srgs+xml': 'grxml',
  'thraud+xml': 'tfi',
  'timestamped-data': 'tsd',
  'voicexml+xml': 'vxml',
  'widget': 'wgt',
  'winhlp': 'hlp',
  'xcap-diff+xml': 'xdf',
  'xml-dtd': 'dtd',
  'xproc+xml': 'xpl',
  'xv+xml': 'mxml',
  /* AUDIO */
  'adpcm': 'adp',
  'basic': 'au',
  'midi': 'mid',
  'silk': 'sil',
  'wave': 'wav',
  /* FONT */
  'collection': 'ttc',
  /* IMAGE */
  'aces': 'exr',
  'dicom-rle': 'drle',
  'g3fax': 'g3',
  'heic-sequence': 'heics',
  'heif-sequence': 'heifs',
  'tiff-fx': 'tfx',
  'tiff': 'tif',
  /* MESSAGE */
  'global-delivery-status': 'u8dsn',
  'global-disposition-notification': 'u8mdn',
  'global-headers': 'u8hdr',
  'global': 'u8msg',
  'rfc822': 'eml',
  /* MODEL */
  'gltf-binary': 'glb',
  'iges': 'igs',
  'mesh': 'msh',
  'vrml': 'wrl',
  'x3d-vrml': 'x3dv',
  'x3d+binary': 'x3db',
  'x3d+fastinfoset': 'x3db',
  'x3d+vrml': 'x3dv',
  /* TEXT */
  'cache-manifest': 'appcache',
  'calendar': 'ics',
  'coffeescript': 'coffee',
  'mathml': 'mml',
  'plain': 'txt',
  'richtext': 'rtx',
  'tab-separated-values': 'tsv',
  'troff': 't',
  'turtle': 'ttl',
  'uri-list': 'uri',
  /* VIDEO */
  '3gpp2': '3g2',
  'mp2t': 'ts',
  'quicktime': 'qt'
};

/* EXPORT */

export {MIME_FULL, MIME_SHORT};
