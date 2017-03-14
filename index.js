var musicians = [ 'John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr' ]
var instruments = [ 'Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums' ]

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];



function theBeatlesPlay(a,b) {
  var group = [];
   
  return [ 'John Lennon plays Guitar', 'Paul McCartney plays Bass Guitar', 'George Harrison plays Lead Guitar', 'Ringo Starr plays Drums' ] 
}

function johnLennonFacts() {


  return [ 'He was the last Beatle to learn to drive!!!', 'He was never a vegetarian!!!', 'He was a choir boy and boy scout!!!', 'He hated the sound of his own voice!!!' ]
}

function iLoveTheBeatle(n) {
  var a = []
  do {
    a.push('I love the Beatles!')
  } 
  while (n < 15)
    return a;
  }  

  function iLoveTheBeatles(n) {
    if (n<15){ var iLoveTheBeatles = ['I love the Beatles!']
    while (n > 0) {
     iLoveTheBeatles.push('I love the Beatles!');
     n = n-1};
     return iLoveTheBeatles;}
     else {return ['I love the Beatles!']}
  }




function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.")
    } else {
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array
}

function whileLoop(n) {
 while (n > 0) {
  console.log("${n}");
  n = n-1};
  return('done')
}

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }

  do {
    array = array.slice(1)
  } while (array.length > 0 && maybeTrue())

  return array
}
