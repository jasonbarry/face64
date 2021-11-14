var fcp = String.fromCodePoint
var MAGIC = 128464
var UNDEF = 'undefined'
function encode(txt) {
  return btoa(encodeURIComponent(txt))
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
function auto(str) {
  return str.codePointAt(0) >= MAGIC ? decode(str) : encode(str)
}
var face64 = { encode, decode, auto }
if (typeof module !== UNDEF && typeof module.exports !== UNDEF) {
  module.exports = face64
} else if (window) {
  window['face64'] = face64
}