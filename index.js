// add solution here
function theBeatlesPlay(musicians, instruments){
  var newa = []
  for (var m = 0; m < musicians.length; m++) {
    newa.push(`${musicians[m]} plays ${instruments[m]}`)
  }
  return newa
}

function johnLennonFacts(facts){
  var i = 0
  var newa = []
  while (i < facts.length) {
    newa.push(`${facts[i]}!!!`)
    i++
  }
  return newa
}

function iLoveTheBeatles(n){
  var newa = []
  do {
    newa.push("I love the Beatles!")
    n++
  } while (n < 15)
  return newa
}