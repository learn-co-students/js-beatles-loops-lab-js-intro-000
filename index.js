function theBeatlesPlay(musicians, instruments){
  var thisArray =[];
  for(let i = 0; i <musicians.length; i++){
    var z = musicians[i];
    var x = instruments[i];
    var y = z + " plays " + x;
    thisArray.push(y);
  }
  return thisArray;
}

function johnLennonFacts(facts){
  let x = 0;
  while(x < facts.length){
    var a = "!!!";
    var b = facts[x]+a;
    facts[x] = b;
    x = x+1
  }
  return facts;
}

function iLoveTheBeatles(number){
  var x =[];
  do{
    x.push("I love the Beatles!")
    number=number+1;
  }while(number<15)
  return x;
}
