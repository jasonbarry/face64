# face64

Like base64, but with emoji

- Under 700 bytes, no dependencies
- Works in node.js and the browser
- Pretty silly in general

## Installation

```js
  yarn add face64
  // ...
  import face64 from 'face64'
```

or

```html
  <script src="https://unpkg.com/face64"></script>
```

## Usage

```js
  face64.encode('Jello, world!') // "π£π½π¦ππ²πππΌππ»ππΌππΊπππ²ππππͺπππ"
  face64.decode('π£π½π¦ππ²πππΌππ»ππΌππΊπππ²ππππͺπππ') // "Jello, world!"

  face64.auto('Jello, world!')   // "π£π½π¦ππ²πππΌππ»ππΌππΊπππ²ππππͺπππ"
  face64.auto('π£π½π¦ππ²πππΌππ»ππΌππΊπππ²ππππͺπππ')   // "Jello, world!"
```
