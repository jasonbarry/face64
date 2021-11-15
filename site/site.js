function $(qs) { return document.querySelector(qs) }
function random() { return String.fromCodePoint(Math.floor(Math.random() * 64) + 128512) }
function randomize() { $('h1').innerText = random() + ' face64 ' + random() }

window.addEventListener('DOMContentLoaded', randomize)
$('h1').addEventListener('click', randomize)

$('#encode').addEventListener('input', function (event) {
  var value = event.target.value
  $('#decode').value = window.face64.auto(value)
  $('#copy').innerText = 'Copy'
  if (!value) {
    $('#clear').classList.add('hidden')
    $('#copy').classList.add('hidden')
  } else {
    $('#clear').classList.remove('hidden')
    $('#copy').classList.remove('hidden')
  }
})

$('#clear').addEventListener('click', function () {
  $('#encode').value = ''
  $('#decode').value = ''
  $('#clear').classList.add('hidden')
  $('#copy').classList.add('hidden')
  $('#encode').focus()
})

$('#copy').addEventListener('click', function () {
  navigator.clipboard.writeText($('#decode').value)
  $('#copy').innerText = 'Copied'
  $('#decode').select()
})
