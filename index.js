function theBeatlesPlay(musicians, instruments) {
  var strArray = []
  for (var i = 0; i < musicians.length; i++) {
    strArray.push(`${musicians[i]} plays ${instruments[i]}`)
      }
      return strArray
}

function johnLennonFacts(facts) {
var i = facts.length - 1
  while ( i >= 0) {
    facts[i] += "!!!"
    i--
  }
  return facts
}

function iLoveTheBeatles(num) {
var strArr = []
do {
  strArr.push("I love the Beatles!")
  num++
} while (num<15);
return strArr
}
