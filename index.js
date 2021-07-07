// add solution here
const musicians = ('john', 'paul', 'george', 'ringo');
const instruments = ('guitar', 'guitar', 'bass', 'drums');

function theBeatlesPlay(musicians, instruments) {
  var band = [];
  for (let i = 0; i < 4; i++) {band.push(musicians[i] + ` plays ` + instruments[i]) };
  return band;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  var bigfacts = [];
  let i = 0;
  while (i < facts.length) {bigfacts.push(facts[i++] + `!!!`)};
  return bigfacts;
}

function iLoveTheBeatles(n) {
var love = [];
do {love.push("I love the Beatles!");
}
while (n++ < 14);
return love;
}
