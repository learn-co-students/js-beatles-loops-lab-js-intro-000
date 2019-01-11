// add solution here
function theBeatlesPlay(musicians, instruments) {

  let array = []

  for (let i = 0; i < musicians.length; i++){
    let sentence = musicians[i] + " plays " + instruments[i]
    array = [...array, sentence]
  }
  return array
}


function johnLennonFacts(facts){
  let array = []
  let i = 0
  while (i < facts.length){
    let sentence = facts[i] + "!!!"
    array = [...array, sentence]
    i++
  }
  return array
}

function iLoveTheBeatles(number){
  let array = []
  do {
    array = [...array, "I love the Beatles!"]
    number++
  } while (number < 15)
    return array
}
