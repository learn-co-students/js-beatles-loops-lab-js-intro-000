function theBeatlesPlay(musicians, instruments) {
  var theBand = new Array();
  for (var i = 0; i <= 3; i++) {
      theBand.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return theBand
}

function johnLennonFacts(facts) {
  var theFacts = facts;
  var n = theFacts.length - 1
  while (n >= 0) {
    theFacts[n] = `${theFacts[n]}!!!`
    n--;
  }
  return theFacts
}

function iLoveTheBeatles(times) {
  var beatlesArray = new Array();
  var loops = times
  do {
    beatlesArray.push('I love the Beatles!')
    loops++
} while (loops < 15);
return beatlesArray
}
