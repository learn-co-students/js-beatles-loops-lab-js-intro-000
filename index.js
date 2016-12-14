function theBeatlesPlay(musicians, instruments){
  var array = [];
  for (let i=0;i<musicians.length ||i<instruments.length;i++){
    array[i]=`${musicians[i]} plays ${instruments[i]}`;
  }
  return array;
}

function johnLennonFacts(facts){
  let i=0
  while (i<facts.length){
    facts[i]=facts[i]+"!!!";
    i++
  }
  return facts;
}

function iLoveTheBeatles(number){
  var array=[];
  let i=0
  do{
    array[i++]= "I love the Beatles!";
    number++
  }while(number<15)
  return array;
}