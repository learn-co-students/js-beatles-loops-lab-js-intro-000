// add solution here
function theBeatlesPlay(musicians, instruments){
  var array = []
  for (let i = 0; i < musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
return array
}

// needs to take each element from both arrays
// loop with a counter, i= 0, some condition, i ++1
// `${musicians[0]} plays ${instruments[0]}`
// need to add to array, I think .push is okay because we only need one array
// return

function johnLennonFacts(facts){
  var array = []
  let num = 0
  while (num < facts.length) {
    array.push(`${facts[num]}!!!`)
    num += 1
  }
  return array
}

function iLoveTheBeatles(num){
  var array = []
  do {
    array.push('I love the Beatles!')
    num += 1
  } while(num < 15)

  return array
}
