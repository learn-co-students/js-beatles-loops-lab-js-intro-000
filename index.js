// add solution here
function theBeatlesPlay(musicians, instruments){
  var array = []
  for (let i = 0 ; i < musicians.length ; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array
}

function johnLennonFacts(array){
  var i = 0
  var newArray = []
  while (i < array.length) {
    newArray.push(`${array[i]}!!!`);
    i+=1
  }
  return newArray
}

function iLoveTheBeatles(number){
  var array = []
  do {
    array.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return array
}
