var musicians = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'];
var instruments = ['keyboard', 'bass guitar', 'guitar', 'drums'];


function theBeatlesPlay(musicians, instruments) {
  var newVar = [];
  for (var a=0; a < musicians.length; a++) {
    newVar.push(musicians[a] + ' plays ' + instruments[a]);
    }
    return newVar;
}



const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  var newArr = [];
  var b = 0;
while (b < facts.length) {
  newArr.push(facts[b] + "!!!")
  b++;
}
return newArr;
}




function iLoveTheBeatles(num) {
  var first15 = [];
    do {
    first15.push("I love the Beatles!");
    num++;
  }
    while (num < 15);
  return first15;
}
