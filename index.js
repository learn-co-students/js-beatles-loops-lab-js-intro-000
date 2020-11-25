function theBeatlesPlay(musicians,instruments){
  var instrumentsPlayed=[]
  for(let num = 0; num <musicians.length;num += 1){
   instrumentsPlayed.push(`${musicians[num]} plays ${instruments[num]}`)
  }
  return instrumentsPlayed
}
function johnLennonFacts(facts){
var arrayFacts=[]
  let num=0
  while(num < facts.length){
    arrayFacts.push(`${facts[num]}!!!`)
    num+=1
  }
  return arrayFacts
}
function iLoveTheBeatles(number){
  var arrayNumber=[]
  do{arrayNumber.push("I love the Beatles!")
  number += 1
  }
  while (number <15
  )
  return arrayNumber
}
