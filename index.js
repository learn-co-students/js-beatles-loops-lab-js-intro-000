// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  var segment = " plays "
  for ( var i = 0; i < musicians.length; i++ ) {
      var concat = musicians[i] + segment + instruments[i]  ;
      array.push(concat);
  }

  return array
}

function johnLennonFacts(facts) {
  var i = facts.length - 1;
  while (i >= 0) {
      facts[i] = facts[i] + "!!!";
      i += -1
  }
  return facts
}

function iLoveTheBeatles(num) {
  var array =[];
  var string = "I love the Beatles!"
  do {
    array.push(string)
    num += 1
  } while (num < 15);

  return array

}
