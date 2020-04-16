# Mime2Ext

Convert a mime type to a file extension. It works only with popular mime types and it's super lightweight.

This library is designed to only support the ~250 popular mime types listed [here](https://github.com/broofa/node-mime/blob/master/types/standard.js), while being ~98% smaller than [mime-types](https://www.npmjs.com/package/mime-types) and ~65% smaller than even [mime](https://www.npmjs.com/package/mime)'s lite version.

## Install

```sh
npm install --save mime2ext
```

## Usage

```ts
import mime2ext from 'mime2ext';

mime2ext ( 'audio/mp3' ); // => 'mp3'
```

## License

MIT © Fabio Spampinato
