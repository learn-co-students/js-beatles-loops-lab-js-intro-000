// add solution here
function theBeatlesPlay(musicians, instruments){
  var newarray=[];
  for (var i=0; i<musicians.length; i++){
    newarray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newarray;
}
function johnLennonFacts(facts){
  var index=0
  var factsarray=[]
  while (index<facts.length){
    factsarray.push(`${facts[index]}!!!`);
    ++index

  }
  return factsarray;
}
function iLoveTheBeatles(number){
  var emptyarray=[]
  do {

  (emptyarray.push('I love the Beatles!'));
  ++number;
} while (number<15);
return emptyarray;
}
