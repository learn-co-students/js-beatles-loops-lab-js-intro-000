function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for(var i = 0; i <= musicians.length-1; i++) {
    var string = `${musicians[i]} plays ${instruments[i]}`;
    arr.push(string);
  }
  return arr;
}

function johnLennonFacts(facts) {
  var i = 0;
  var arr = [];
  while(i < facts.length) {
    arr.push(`${facts[i]}!!!`);
    i++;
  }
  return arr;
}

function iLoveTheBeatles(number) {
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    number++;
  }
  while(number < 15);

  return arr;
}
