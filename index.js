function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
  for(var i = 0; i < musicians.length; i++) {
    var musician = musicians[i];
    var instrument = instruments[i];
    newArray.push(`${musician} plays ${instrument}`);
  }
  return newArray;
}

function johnLennonFacts(array) {
  var newArray=[];
  let i = 0;
  while(i < array.length) {
    var newFact = array[i] + "!!!";
    newArray.push(newFact);
    i++;
  }
  return newArray;
}

function iLoveTheBeatles(number){
  var newArray = [];
  do {newArray.push("I love the Beatles!");
  number++;
} while (number < 15);
return newArray;
}
