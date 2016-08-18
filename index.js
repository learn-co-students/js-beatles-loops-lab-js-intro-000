function theBeatlesPlay (musicians, instruments){
  var response = [];
  for (var i = 0; i < musicians.length; i++){
    response.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return response;
}

function johnLennonFacts (array){
  var response = [];
  while (array.length > 0){
    response.push(array.shift() + "!!!");
  }
  return response;
}

function iLoveTheBeatles (stop){
  var response = [];
  do {
    response.push("I love the Beatles!");
    stop += 1;
  } while (stop < 15);
  return response;
}
