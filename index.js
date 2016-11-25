function theBeatlesPlay(musicians, instruments){
  var combo = []
  for (let i = 0; i < musicians.length ; i++) {
    combo.push(musicians[i] + " plays " + instruments[i]);
  }
  return combo
}

function johnLennonFacts(factarray){
  var i = 0
  while(i < factarray.length){
    factarray[i]=factarray[i]+"!!!";
    i++;
  }
  return factarray
}

function iLoveTheBeatles(n){
  var newarray = []
  do {
    newarray.push("I love the Beatles!")
    n++
  } while (n < 15);

  return newarray
}
