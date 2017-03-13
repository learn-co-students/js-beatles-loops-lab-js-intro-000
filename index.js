function theBeatlesPlay(artist, instrument) {
  var myArray = [];
  for (var i=0;i<artist.length;i++) {
    var loop = artist[i]+" plays "+instrument[i];
    myArray.push(loop);
    }
    return myArray;
}


function johnLennonFacts(facts) {
  var myArrayFacts = [];
  var i = 0;
  while(i<facts.length){
    var fact = facts[i]+"!!!";
    myArrayFacts.push(fact);
    i++;
  }
  return myArrayFacts;
}

function iLoveTheBeatles(number) {
  var myArrayLove = [];
  do {
  myArrayLove.push("I love the Beatles!");
  number++;
  } while(number<15);
  return myArrayLove;
}
