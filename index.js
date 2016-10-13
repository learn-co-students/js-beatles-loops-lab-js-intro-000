function theBeatlesPlay(musicians, instruments){
  var emptyArray = [];
  var arrayLength = musicians.length;
  for (var i = 0; i < arrayLength; i++){
    emptyArray.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return emptyArray;
}

function johnLennonFacts(facts){
  var arrayLength = facts.length;
  var emptyArray = [];
  var i = 0;
  while (i < arrayLength){
    emptyArray.push(facts[i] + '!!!');
    i+=1;
  }
  return emptyArray;
}

function iLoveTheBeatles(number){
  var emptyArray = [];
  do {
    emptyArray.push('I love the Beatles!')
    number += 1;
  } while (number < 15);
  return emptyArray;
}
