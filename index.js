// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var n=0; n<4; n++) {
    array[n] = `${musicians[n]} plays ${instruments[n]}`
    }
    return array
  }

  function johnLennonFacts(array) {
    var n = array.length
    while (n>0) {
      array[n-1] = `${array[n-1]}!!!`
      --n
}
return array
}

function iLoveTheBeatles(n) {
  var array = []
  function incrementVariable() {
    n = n + 1;
    return n
  }
  do {
    array.push("I love the Beatles!")
  } while (incrementVariable()<15)
  return array
}
