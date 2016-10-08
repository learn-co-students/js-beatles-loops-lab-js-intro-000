function theBeatlesPlay(musicians, instruments) {
  var xyz = [];

  for(var i=0; i<musicians.length; ++i)
      xyz.push(musicians[i] + ' plays ' + instruments[i]);

  return xyz;
}

function johnLennonFacts(facts) {
  var i = 0;

  while (i<facts.length)
    facts[i++] += "!!!";

  return facts;
}

function iLoveTheBeatles(n) {
  var xyz = [];

  do {
    xyz.push("I love the Beatles!");
  } while (++n<15)

  return xyz;
}
