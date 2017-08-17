function theBeatlesPlay (musician, instrument) {

  var beatlesArray = [];

  for (var n = 0; n < musician.length; n++) {
    beatlesArray.push(`${musician[n]} plays ${instrument[n]}`);
  }

  return beatlesArray;

}




function johnLennonFacts (facts) {

  var factsArray = [];
  let n = 0;

  while (n < (facts.length)) {
    factsArray.push(`${facts[n]}!!!`);
    n++;
  }

  return factsArray;
}


function iLoveTheBeatles (n) {
  var myArray = [];
  let i = 0;

  do {

    myArray.push(`I love the Beatles!`);
    i++;

  } while (i <= n && n < 15);

  return myArray;
}
