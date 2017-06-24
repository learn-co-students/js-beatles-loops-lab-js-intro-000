function theBeatlesPlay (musicians, instruments) {
  var stuff = []
  for (let i = 0; i < musicians.length; i ++) {
    stuff.push ((musicians[i]) + ' plays ' + (instruments[i]))
  }
  return stuff
}

function johnLennonFacts (facts) {
  var strings = []
  var i = 0
  while (i < facts.length) {
    strings.push ((facts[i]) + '!!!')
    i++
  }
  return strings
}

function iLoveTheBeatles (number) {
  var array = []
  do {
    array.push ("I love the Beatles!")
    number++
  }
  while (number < 15);
  return array
}
