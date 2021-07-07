
function theBeatlesPlay(musicians, instruments) {
  var arr1 = [];
  for (var i = 0; i < musicians.length; i++) {
    arr1.push(musicians[i]+' plays '+instruments[i]);
  }
  return arr1;
}

function johnLennonFacts(facts) {
  var excitedFacts = [];
  var i = 0;
  while (i < facts.length) {
    excitedFacts.push(facts[i]+'!!!');
    i++
  }
  return excitedFacts;
}

function iLoveTheBeatles(number) {
  var arr2 = [];

  do {
    arr2.push('I love the Beatles!')
    number++;
  }
  while (number < 15);
  return arr2
}
