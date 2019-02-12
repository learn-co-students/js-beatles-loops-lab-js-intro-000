function theBeatlesPlay(musicians, instruments) {
  const array1 = [];
  for (let i = 0, l = musicians.length; i < l; i++) {
    array1.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array1;
}


function johnLennonFacts(facts) {
  const lennonFacts = []
  
  let i = 0
  while (i < facts.length) {
    lennonFacts.push(`${facts[i]}!!!`)
    i++
  }
  return lennonFacts
}

function iLoveTheBeatles(number) {
  const loveArray = []

  do {
    loveArray.push("I love the Beatles!")
    number++
  } while (number < 15);
  return loveArray
}







