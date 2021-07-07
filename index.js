function theBeatlesPlay(arrOfMusicians, arrOfInstruments){
  let newArr = []
  for(let i = 0; i < arrOfMusicians.length; i++){
    newArr.push(arrOfMusicians[i] + " plays " + arrOfInstruments[i])
  }
  return newArr
}

function johnLennonFacts(arrOfFacts){
let newArr = []
let i = 0
  while(i < arrOfFacts.length){
    newArr.push(arrOfFacts[i] + "!!!")
    i++
  }
  return newArr
}

function iLoveTheBeatles(num){
  let variable = []
  do {
    variable.push("I love the Beatles!")
    num++
  } while (num < 15){
  }
  return variable
}
