function theBeatlesPlay(musicians, instruments) {
  var newArray = new Array();
  for (let i = 0; i < musicians.length; i++) {
    console.log(`${musicians[i]} plays ${instruments[i]}`);
    newArray.push(`${musicians[i]} plays ${instruments[i]}`);
  };
  return newArray;
}

function johnLennonFacts(factsArray) {
  var newFactsArray = new Array();
  while(factsArray.length > 0) {
    var fact = factsArray.pop();
    console.log(fact);
    newFactsArray.unshift(`${fact}!!!`);
  };
  return newFactsArray;

}

function iLoveTheBeatles(number) {
  var emptyArray = new Array();
  do {
    emptyArray.unshift("I love the Beatles!");
    number++;
  } while (number < 15);
  return emptyArray;
}
