function theBeatlesPlay(musicians, instruments) {
  var players = [];
  for (var i = 0; i < musicians.length; i++) {
    var musician = musicians[i];
    var instrument = instruments[i];
    var newString = musician + ' plays ' + instrument;
    players.push(newString);
  }
  return players;
}

function johnLennonFacts(array) {
  var excitedFacts = [];
  var i = 0;
  while (i < array.length) {
    var fact = array[i];
    excitedFacts.push(fact + '!!!');
    i++;
  }
  return excitedFacts;
}

function iLoveTheBeatles(number) {
  var love = [];
  do {
    love.push('I love the Beatles!');
    number++;
  } while (number < 15);
  return love;
}
