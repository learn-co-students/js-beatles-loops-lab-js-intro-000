// add solution here

function theBeatlesPlay(musicians, instruments){
  var array = [];
  var i;

  for (i = 0; i < musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }

  return array;
}

function johnLennonFacts(facts){

  var i = 0;
  var bigFacts = [];

  while (i < facts.length){
    bigFacts.push(`${facts[i]}!!!`); // concatenate fact[i] with '!!!'
    i++; // iterate
  }

  return bigFacts;
}

function iLoveTheBeatles(num){
  var array = [];

  do {
    array.push('I love the Beatles!');
    num++
  }while(num < 15)

  return array;
}
