function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
    }
    return array
  }

function johnLennonFacts(array) {
  const fact = []
  var i = 0

  while (i < array.length){
  fact.push(`${array[i]}!!!`)
  i++
}
return fact
}

function iLoveTheBeatles(n) {
  //var i = 0
  var array = []
  do {
    array.push('I love the Beatles!')
    n++
  }
 while (n < 15);
 return array
}
