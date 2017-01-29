function theBeatlesPlay(musicians, instruments) {
  var array = new Array();
  for (var i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + ' plays ' + instruments[i])
  }
  return array
}

function johnLennonFacts(array) {
  var newArray = new Array()
  while (array.length > 0) {
    newArray.unshift(array[array.length - 1] + '!!!')
    array.pop()
  }
  return newArray
}

function iLoveTheBeatles(n) {
  var array = new Array()
  do {
    array.push('I love the Beatles!')
    n = n + 1
  } while (n < 15);
  return array
}