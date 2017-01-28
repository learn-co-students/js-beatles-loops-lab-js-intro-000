function theBeatlesPlay(musicians, instruments) {
  var words = [];
    for ( let i=0; i<musicians.length; i++) {
      words.push(musicians[i] + " plays "  + instruments[i]);
    }
    return words;
}

function johnLennonFacts(facts) {
var counter = 0;
var exclamations = [];
  while (counter<facts.length) {
    exclamations.push(facts[counter] + "!!!");
    counter++;
  }
  return exclamations;
}

function iLoveTheBeatles(number) {
  var string = [];
  do {
    string.push("I love the Beatles!");
    number++;
  } while (number<15)
  return string;
}
