function theBeatlesPlay(musicians, instruments){
  var whoPlaysWhat = [];
  for(var i=0; i<musicians.length; i++){
    whoPlaysWhat.push(musicians[i] + " plays " + instruments[i]);
  }
  return whoPlaysWhat;
}

function johnLennonFacts(array){
  var lennonFacts = [];
  for(var i=0; i<array.length; i++){
    lennonFacts.push(array[i] + "!!!")
  }
  return lennonFacts;
}

function iLoveTheBeatles(n){
  var beatlesLove = [];
  do {
    beatlesLove.push("I love the Beatles!");
    n--;
  } while (n>=0 && n<15);
  return beatlesLove;
}
