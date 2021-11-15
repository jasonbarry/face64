(function() {
  var fcp = String.fromCodePoint
  var MAGIC = 128464
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
  var f64 = { encode, decode, auto }
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = f64
  } else if (window) {
    window['face64'] = f64
  }
}())