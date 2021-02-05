function theBeatlesPlay(musicians,instruments){
  var instrumentsplayed=[]
  for(let i=0;i <musicians.length;i++){
    instrumentsplayed.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return instrumentsplayed
}
function johnLennonFacts(facts){
  var newfact=[]
  let i=0
  while(i<facts.length){
    newfact.push(`${facts[i]}!!!`)
    i++
  }
  return newfact
}
