function theBeatlesPlay(musicians, instruments) {
  var array= []
  for (var i = 0; i<musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments [i]}`)
  }
  return array
}

function johnLennonFacts(array) {
  var newArray = []
  var i = 0;
  while (i < array.length) {
    newArray.push (`${array[i]}!!!`);
    i++;
  }
  return newArray
}

function iLoveTheBeatles(number){
  var array = [], i = number;
  do {
    array.push("I love the Beatles!");
    i--
  } while (i <15 && i > -1)
  return array
}
  
