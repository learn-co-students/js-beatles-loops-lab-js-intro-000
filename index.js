// add solution here

function theBeatlesPlay(musicians, instruments){
  var arr = [];
  for (var i = 0; i < musicians.length; i++){
    var msgString = `${musicians[i]} plays ${instruments[i]}`;
    arr.push(msgString);
  }
  return arr;
}

function johnLennonFacts(facts){
  var i = 0;
  while (i < facts.length){
    facts[i] = `${facts[i]}!!!`;

    i++;
  }
  return facts;
}

function iLoveTheBeatles(number){
  var loveArray = [];

  do {
    loveArray.push("I love the Beatles!");
    number++;
  }
  while (number < 15);
  return loveArray;
}
