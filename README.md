# face64

```
  yarn add face64
```

```js
  import { encode, decode, auto } from 'face64'
```

```js
  const str = 'Hello, world!'
  encode(str) // "😣😗😦🙃😲😗😈😼😝😻😝😼😝😺😒😃😲😃😚🙃😪😓😕😍"
```

```js
  const str = '😣😗😦🙃😲😗😈😼😝😻😝😼😝😺😒😃😲😃😚🙃😪😓😕😍'
  decode(str) // "Hello, world!"
```

```js
  let str = 'Hello, world!'
  str = auto(str) // "😣😗😦🙃😲😗😈😼😝😻😝😼😝😺😒😃😲😃😚🙃😪😓😕😍"
  auto(str) // "Hello, world!"
```
