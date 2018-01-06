function theBeatlesPlay(musicians, instruments){
  var a = [];
  var s;
  for (var i = 0; i < musicians.length; i++) {
    s = `${musicians[i]} plays ${instruments[i]}`
    a = [...a, s]
    a;
  }
  return a;
}

function johnLennonFacts(facts){
  var counter = 0;
  var f = [];
  var s;
  while (counter < facts.length) {
    s = `${facts[counter]}!!!`;
    f = [...f, s];
    counter++;
  }
  return f;
}


function iLoveTheBeatles(number){
  var x = [];
  do {
    x = [...x, "I love the Beatles!"]
    number++;
  } while (number < 15);
  return x;
}
