function theBeatlesPlay(musicians, instruments){
  var result=new Array();
  for(let i=0;i<musicians.length;i++){
    result.push(musicians[i]+" plays "+instruments[i]);
  }
  return result;
}

function johnLennonFacts(facts){
  var i=0;
  var result=new Array();
  while (i<facts.length){
    result.push(facts[i]+"!!!");
    i++;
  }

  return result;
}


function iLoveTheBeatles(times){
  var i=0;
  var result= new Array();
  do {
    result.push("I love the Beatles!");
    i++;
  }while(i<=times && times<15)

  return result;
}
