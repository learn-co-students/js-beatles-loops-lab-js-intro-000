function theBeatlesPlay(musicians, instruments){
  var emptyArray = [];
  for(var i = 0; i < 4; i++){
    var sentence = `${musicians.shift()} plays ${instruments.shift()}`;
    emptyArray.push(sentence);
  }
  return emptyArray;
}

function johnLennonFacts(facts){
  var excArray = [];
  while(0 < facts.length){
    var excSentence = `${facts.shift()}!!!`;
    excArray.push(excSentence);
  }
  return excArray;
}

function iLoveTheBeatles(num){
  var newArray = [];
  do{
    newArray.push('I love the Beatles!');
  } while(newArray.length <= num && num < 15);
  return newArray;
}