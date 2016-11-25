function theBeatlesPlay (musician,instruments){
  var combo = new Array();

  for (var i=0; i < musician.length; i++){
    var stringTemp = musician[i]+' plays '+instruments[i];
    combo.push(stringTemp);
  }
  return combo;
}

function johnLennonFacts (facts) {
  var i=facts.length;
  var j=0;
  while(i>0){

    facts[j] = facts[j] + '!!!' ;
    j++;
    i--;
  }
  return facts;
}

function iLoveTheBeatles (number){
  var empty = [];
  do{
    empty.push('I love the Beatles!')
    number++
  } while (number<15)
  return empty;
}
