var crypto = require('crypto')
var $input = document.querySelector('input[type=file]')
var algorithms = ['md5', 'sha1', 'sha256', 'sha512']
var encodings = ['hex', 'binary', 'base64']

$input.addEventListener('change', function () {
  var file = $input.files[0]
  if (file == null) return

  var r = new window.FileReader()
  r.onerror = function (err) {
    console.error(err)
  }
  r.onload = function () {
    var ab = r.result
    algorithms.forEach(function (algorithm) {
      encodings.forEach(function (encoding) {
        var hash = crypto.createHash(algorithm)
        hash.update(new Buffer(ab))
        var $el = document.querySelector('.webpack .' + algorithm + ' .' + encoding)
        $el.textContent = hash.digest(encoding)
      })
    })
  }
  r.readAsArrayBuffer(file)
}, false)
