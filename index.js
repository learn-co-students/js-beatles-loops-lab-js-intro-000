function theBeatlesPlay (musician, instrument) {
  var musician = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  var instrument = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  var beatles = [];

  let i = 0;

  for (i = 0; i < 4; i++) {
    beatles.push(`${musician[i]} plays ${instrument[i]}`);
  }
  return beatles;
}

function johnLennonFacts(facts) {
  let i = 0;

  while (i < facts.length) {
    facts[i] = `${facts[i]}!!!`;
    i+=1;
  }
  return facts;
}

function iLoveTheBeatles(n) {
var array = [];

do {
  array.unshift("I love the Beatles!");
  n+=1;
} while (n < 15);

return array;

}
