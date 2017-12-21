function theBeatlesPlay(musicians, instruments){
  let plays = [];
  for (var i = 0; i < musicians.length; i++) {
    plays.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return plays;
}
function johnLennonFacts(facts) {
  let i = 0
  let factEx = []
  while (i < facts.length ) {
    factEx.push(facts[i]+'!!!');
    i++
  }
  return factEx;
}
function iLoveTheBeatles(number){
  let anArray = [];
  do {
    anArray.push("I love the Beatles!")
    number++
  } while (number < 15);
  return anArray;
}
