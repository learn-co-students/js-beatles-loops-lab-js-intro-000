function theBeatlesPlay(musicians, instruments){
  var result = [];
  for(let i = 0; i < musicians.length; i++){
    result.push(musicians[i]+ " plays " + instruments[i]);
  }return result;
}

/*
function johnLennonFacts(array){
  var result = [];
  for (let i = 0; i < array.length; i++){
    result.push(array[i] + "!!!");
  } return result;
}
*/

function johnLennonFacts(array){
  var result = [];
  var i = 0;
  while(i < array.length){
    result.push(array[i] + "!!!");
    i++;
  } return result;
}

// Do while

function iLoveTheBeatles(number){
  let result = [];
  let i = 15;
  do {
    result.push("I love the Beatles!");
    i--;
  }
  while (i > number);
  return result;
}
