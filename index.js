var array = []
function theBeatlesPlay (musicians, instruments){
  for (var i = 0; i < 4; i++){
    array.push(musicians[i] + ' plays ' + instruments[i])
  }
  return array;
}

function johnLennonFacts (facts){
  while (facts < 3){
    return facts + "!!!";
  }
}

function iLoveTheBeatles(number){
  var array = [];
  do{
    array.push("I love the Beatles!");
    number++
  } while (number.length < 15)
  return "I love the Beatles!"
}
