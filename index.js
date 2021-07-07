// add solution here

function theBeatlesPlay(musicians, instruments){
  let array = []
  for(let i=0;i<musicians.length;i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}


function johnLennonFacts(facts){
  let array = []
  let i = 0
  while(i < facts.length){
    array.push(`${facts[i]}!!!`)
    i += 1
  }
  return array
}

function iLoveTheBeatles(num){
  let array =[]
  do{
    array.push("I love the Beatles!")
    num +=1
  }
  while(num < 15)
  return array
}
