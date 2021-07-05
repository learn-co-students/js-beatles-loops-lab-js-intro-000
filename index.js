// add solution here
function theBeatlesPlay(mus, ins) {
  var array = []
  for(let i = 0; i < 4; i++) {
    array[i] = mus[i] + ' plays ' + ins[i]
  }
  return array
}

function johnLennonFacts(facts) {
 let num = 0
  while(num < facts.length) {
    facts[num] = facts[num] + '!!!'
    num++
  }
  return facts
}

function iLoveTheBeatles(n) {
  var newArray = []
  let count = 0
  function incrementVariable() {
    count += 1
    return count
  }
  do {newArray[count]='I love the Beatles!'} while (incrementVariable() < (15 - n))
  return newArray
}