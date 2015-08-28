var crypto = require('crypto');

var $input = document.querySelector('input[type=file]');
var $base64 = document.querySelector('#base64');

$input.addEventListener('change', function () {
  var file = $input.files[0];
  if (!file) return;

  var r = new FileReader();
  r.onerror = function (err) {
    console.error(err);
  };
  r.onload = function () {
    var buf = r.result;
    console.log(buf);
    var hash = crypto.createHash('md5');
    hash.update(buf);
    $base64.textContent = hash.digest('base64');
  };
  r.readAsArrayBuffer(file);

}, false);
