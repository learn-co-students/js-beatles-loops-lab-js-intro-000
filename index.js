function theBeatlesPlay(musicians, instruments){
  var tmp = []
  for(var i = 0; i < musicians.length; i++){
    tmp[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return tmp
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(claims){
  var tmp = []
  var i = 0
  while (i < claims.length){
    tmp[i] = `${claims[i]}!!!`
    i++
  }
  return tmp
}

function iLoveTheBeatles(param){
  var tmp = []
  do {
    tmp.push("I love the Beatles!")
    param++
  } while (param < 15)
  return tmp
}