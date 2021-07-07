// add solution here
function theBeatlesPlay(musicians, instruments){

  const theyPlay = []
  for (let i = 0, l = musicians.length; i < l; i++){
    theyPlay.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return theyPlay
}
function johnLennonFacts(facts){
  const factsExclaim = [];
 let n = 0
  while (n < facts.length){
    factsExclaim.push(`${facts[n]}!!!`)
    n++
  }
  return factsExclaim
}

function iLoveTheBeatles(num) {
  const array = []
  do {array.push(`I love the Beatles!`)
      num++ }
  while (num < 15);
  return array
}
