// add solution here
function theBeatlesPlay(musicians,instruments) {
  let emptyArray= []
  for (let i=0; i<musicians.length; i+=1) {
    emptyArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return emptyArray
}

function johnLennonFacts(facts) {
  let i = 0
  let newFacts = []
  while (i < facts.length) {
    newFacts.push(`${facts[i]}!!!`)
    i+=1
  }
  return newFacts
}

function iLoveTheBeatles(num) {
  let i = 0
  let loveArray =[]
  function incrementVariable() {
    i = i + 1
    return i
  }
  do {
    loveArray.push("I love the Beatles!");
  } while (incrementVariable() <= num && num<15);

  return loveArray
}
