function theBeatlesPlay(musicians, instruments) {
  var sentences = []
  for (var i = 0; i < musicians.length; i++)
  {
  sentences.push(musicians[i] + " plays " + instruments[i])
  console.log(sentences[i])
  }
  return sentences;
};

function johnLennonFacts(facts) {
  const yellFacts = [];
  var i = 0;
  while (i < facts.length) {
  yellFacts.push(`${facts[i]}!!!`)
  i++
  }
  return yellFacts;
};

function iLoveTheBeatles(number) {
  var array = [];
  do {
  array.push("I love the Beatles!");
  number++
  } while (number < 15)
  return array;
};
