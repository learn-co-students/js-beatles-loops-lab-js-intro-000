function theBeatlesPlay(mus, ins){
  const x=[];
  for(var i=0; i<mus.length; i++){
    x.push(mus[i]+ " plays " +ins[i])
}
return x;
}

function johnLennonFacts(facts){
  const factsx=[];
  var i=0;
    do{
  factsx.push(facts[i] + "!!!");
  i++;
} while(i<facts.length)
return factsx;
}

function iLoveTheBeatles(i){
const luv=[];
do{
  luv.push('I love the Beatles!')
  i++;
}  while(i<15)
return luv;
}
