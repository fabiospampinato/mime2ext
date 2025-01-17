# Mime2Ext

Convert a mime type to a file extension. It works only with popular mime types and it's super lightweight.

This library is designed to only support the ~300 popular mime types listed [here](https://github.com/fabiospampinato/mime-standard/blob/master/src/index.ts).

## Install

```sh
npm install mime2ext
```

## Usage

```ts
import mime2ext from 'mime2ext';

// Let's convert a mime type to a file extension

mime2ext ( 'audio/mp3' ); // => 'mp3'
```

## License

MIT © Fabio Spampinato
