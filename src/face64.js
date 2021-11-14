var fcp = String.fromCodePoint
var MAGIC = 128464

function encode(str) {
  return btoa(encodeURIComponent(str))
    .split('')
    .map(c => fcp(c.charCodeAt(0) + MAGIC))
    .join('')
}

function decode(emoji) {
  var b64 = '', cp, i = 0
  while (cp = emoji.codePointAt(i)) {
    b64 += fcp(cp - MAGIC)
    i += 2
  }
  return decodeURIComponent(atob(b64))
}

function translate(either) {
  return either.codePointAt(0) >= MAGIC ? decode(either) : encode(either)
}

// module.exports = { encode, decode, translate }
