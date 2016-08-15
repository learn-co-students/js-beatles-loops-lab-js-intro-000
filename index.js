function theBeatlesPlay(musicians, instruments){
  var newArr = [];

  for(let i = 0; i < musicians.length; i++){
    newArr.push(musicians[i] + " plays " + instruments[i]);
  }
  return newArr;
}

function johnLennonFacts(facts){
  var newFacts = [];
  var i = 0;
  while(i < facts.length){
    newFacts.push(facts[i] + "!!!");
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(number) {
   var newArr = []
   do {
     newArr.push("I love the Beatles!")
     number++
   } while (number < 15)
   return newArr
}
