
function theBeatlesPlay(musicians, instruments){
  var names = []
	for (var i = 0; i < musicians.length; i++) {
		names.push(musicians[i] + " plays " + instruments[i]);
	}
  return names;
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return facts;
}
function iLoveTheBeatles(number) {
  var myArray = [];

  do {
    myArray.push("I love the Beatles!");
    number++;
  } while (number<15);

  return myArray;
}
