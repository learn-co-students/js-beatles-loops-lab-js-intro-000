// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = [];

  for (var i = 0; i < musicians.length; i++){
    array.push(musicians[i] + ` plays ` + instruments[i]);
  }
  return array;
}

function johnLennonFacts(factArray) {
  var count = 0;
  var newSentence = [];
  while (count < factArray.length) {
     newSentence.push(factArray[count] + `!!!`);
     count++;
  }
  return newSentence;
}

function iLoveTheBeatles(num) {
  var love = [];
  var i = num;

function incrementVariable() {
  i = i + 1;
  return i;
}

  do {
    love.push(`I love the Beatles!`);
  } while (incrementVariable() < 15);
  return love;
}
