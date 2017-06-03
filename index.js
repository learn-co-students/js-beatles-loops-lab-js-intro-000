function theBeatlesPlay(musicians, instruments){
  var musicianPlays = [];
  for (var i = 0; i < musicians.length; i++){
    musicianPlays.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return musicianPlays;
};

function johnLennonFacts(facts){
  var counter = 0;
  while (counter < facts.length){
    facts[counter] += "!!!";
    ++counter;
  }
  return facts;
};

function iLoveTheBeatles(number){
  var loveArray = [];
  do {
    loveArray.push("I love the Beatles!");
    ++number;
  } while (number < 15);
  return loveArray;
};
