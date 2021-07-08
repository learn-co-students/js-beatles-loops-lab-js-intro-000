// add solution here
function theBeatlesPlay(musicians, instruments){
  var newArray = [];
  for (let i = 0; i < musicians.length; i++){
        newArray.push(`${musicians[i]} plays ${instruments[i]}`);
      }
  return newArray;
}

function johnLennonFacts(array){
  var newFacts = []
  var i = 0;
  while (i < array.length){
    newFacts.push(array[i] + "!!!");
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(num){
  var newArray = [];
  do{
    newArray.push("I love the Beatles!");
    num++;
  } while ( num < 15)
  return newArray;
}
