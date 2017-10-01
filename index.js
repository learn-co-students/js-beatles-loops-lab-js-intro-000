function theBeatlesPlay (musicians, instruments) {
  var emptyArray = [];
  var musiciansLength = musicians.length
  for (var i = 0; i < musiciansLength; i++) {
    emptyArray.push (`${musicians[i]} plays ${instruments[i]}`)
  }
  return emptyArray
}

function johnLennonFacts (facts) {
  var i = 0
  var factsLength = facts.length
  var lennonArray = [];
  while (i < factsLength) {
    lennonArray[i] = (`${facts[i]}!!!`)
    i++
  }
  return lennonArray
}

function iLoveTheBeatles (number) {
  var beatlesArray = []
  do {
   beatlesArray.push ("I love the Beatles!");
   number++
 } while (number < 15);
 return beatlesArray
}
