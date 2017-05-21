var test = require('tape')
test('loads the zest', function(t) {
  t.notOk(!!document.querySelector('.uwu'))
  require('./')
  t.ok(!!document.querySelector('.uwu'))
  t.end()
})