function theBeatlesPlay(musicians, instruments){
  var myBeat=[];
  for (let i=0; i<musicians.length; i++){
    myBeat.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return myBeat
}

function johnLennonFacts(facts){
  let i=0
  while (i<facts.length){
    facts[i]=facts[i]+'!!!'
    i++
  }
  return facts
}

function iLoveTheBeatles(num){
  var empArr=[]
  do {
    empArr.push('I love the Beatles!')
    num++
    } while (num<15);
  return empArr
}
