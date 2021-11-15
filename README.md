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
  face64.encode('Jello, world!') // "😣😽😦🙃😲😗😈😼😝😻😝😼😝😺😒😃😲😃😚🙃😪😓😕😍"
  face64.decode('😣😽😦🙃😲😗😈😼😝😻😝😼😝😺😒😃😲😃😚🙃😪😓😕😍') // "Jello, world!"

  face64.auto('Jello, world!')   // "😣😽😦🙃😲😗😈😼😝😻😝😼😝😺😒😃😲😃😚🙃😪😓😕😍"
  face64.auto('😣😽😦🙃😲😗😈😼😝😻😝😼😝😺😒😃😲😃😚🙃😪😓😕😍')   // "Jello, world!"
```
