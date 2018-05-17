function theBeatlesPlay(arrayMusicians, arrayInstruments){
  let newArray = [];
  for(var i = 0; i < arrayMusicians.length; i++){
    newArray.push(`${arrayMusicians[i]} plays ${arrayInstruments[i]}`);
  } return newArray;
}

function johnLennonFacts(array){
  var i = 0
  while (i < array.length){
    array[i] = array[i] + "!!!";
    i++;
  } return array;
}

function iLoveTheBeatles(num){
  var array = [];
  do {
    array.push("I love the Beatles!");
    num++;
  } while (num < 15)
  return array;
}
