var musicians = [ 'John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr' ]
var instruments = [ 'Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums' ]

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];


function theBeatlesPlay(musicians, instruments) {
  var a = []
  for (let i = 0, l = musicians.length; i < l; i++) {
    a.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return a
}

function johnLennonFacts(facts) {
const text = []

let i = 0
while (i < facts.length) {
text.push(`${facts[i]}!!!`)
i++
}
return text
}


function iLoveTheBeatles(n) {
  var a = []
  do {
    a.push('I love the Beatles!')
    n++
  } 
  while (n < 15)
    return a;
  }  

  function iLoveTheBeatle(n) {  //  if/else
    if (n<15){ var iLoveTheBeatles = ['I love the Beatles!']
    while (n > 0) {
     iLoveTheBeatles.push('I love the Beatles!');
     n = n-1};
     return iLoveTheBeatles;}
     else {return ['I love the Beatles!']}
  }