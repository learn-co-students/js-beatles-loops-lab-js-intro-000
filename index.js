function theBeatlesPlay(musi,inst){
  var who  = [];
  for(let i=0; i<4; i++){
    who.push(`${musi[i]} plays ${inst[i]}`)
  }
  return who

}

function johnLennonFacts(facts){
var facts2 = []
  let i=0
  while(i<facts.length){
    facts2.push(`${facts[i]}!!!`)
    i +=1
  } return facts2
}

function iLoveTheBeatles(num){
  var emptyArray = [];
  do{emptyArray.push("I love the Beatles!");
  num = num +1}
    while(num<15)
    return emptyArray;
}
