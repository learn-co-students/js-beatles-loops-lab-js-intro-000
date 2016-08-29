function theBeatlesPlay(musicians, instruments){
  var array = [];
  for (var i =0; i<musicians.length; i++){
  array = [...array,`${musicians[i]} plays ${instruments[i]}`];
  }
  return array;
}
function johnLennonFacts(facts){
  var i=0;
  while(i<facts.length){
    facts[i]+="!!!";
    i++;
  }
  return facts;
}
function iLoveTheBeatles(x){
  var emp=[];
  do{
    emp=[...emp,"I love the Beatles!"]
    x++;
  }
  while(x<15);
  return emp
}
