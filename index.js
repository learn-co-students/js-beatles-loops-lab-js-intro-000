function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (let i = 0; i < musicians.length; i++) {
    var string = musicians[i] + " plays " + instruments[i]
    array.push(string)
  }
  return array
}

function johnLennonFacts(facts) {
  let i = 0
  var array = []
  while ( i < facts.length) {
    var string = facts[i] + "!!!"
    array.push(string)
    i++
  }
  return array
}

function iLoveTheBeatles(number) {
  var array = []
  do {
  var string = "I love the Beatles!"
  array.push(string)
  number++ ;
} while (number < 15);
return array

}
