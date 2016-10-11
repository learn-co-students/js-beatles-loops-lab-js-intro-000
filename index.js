var musicians = ["John", "Paul", "George", "Ringo"];
var instruments = ["guitar", "bass", "second_guitar", "drums"];

function theBeatlesPlay(musicians, instruments){
  var newArray = [];
  for(var i = 0, j = 0; i < musicians.length; i++, j++){
      newArray.push(`${musicians[i]} plays ${instruments[j]}`)
  }
  return newArray;
}

var answer = theBeatlesPlay(musicians, instruments);
console.log(answer);

function johnLennonFacts(facts){
  var i = 0;
  var concatFacts = [];
  while (i < facts.length) {
    concatFacts.push(`${facts[i]}!!!`)
    i++;
  }
  return concatFacts;
}

var factsArray = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
johnLennonFacts(factsArray);

function iLoveTheBeatles(n) {
  var loveArray = [];
  do {
    loveArray.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return loveArray;
}

iLoveTheBeatles(10);
