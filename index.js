function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for(var i = 0; i < musicians.length; i++) {
    // "John Lennon plays guitar"
    var str = `${musicians[i]} plays ${instruments[i]}`;
    arr.push(str);
  }
  return arr;
}

function johnLennonFacts(array) {
  var i = 0;
  while(array[i]) {
    array[i].concat('!!!');
  }
  return array;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

johnLennonFacts(facts);
