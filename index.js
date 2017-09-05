/* musicians = ['beck','morrisey','chopin'];
instruments = ['guitar', 'chelo', 'piano'];*/


function theBeatlesPlay (musicians, instruments) {
  var plays =[];
  for (var i=0; i < musicians.length; i++) {
    if (i === 0){
      plays.push(musicians[0] + " plays " + instruments[0])
    } else {plays.push(musicians[i] +" plays " + instruments[i])};
  }
    return plays
}

function johnLennonFacts (facts) {
  var newFacts = [];
  var i =0;
  while (i <facts.length) {
      newFacts.push(facts[i] + "!!!");
      i++;
  }  return newFacts;
}

function iLoveTheBeatles (number) {
  var newArray =[];
  do {newArray.push("I love the Beatles!");
  number++;}
  while (number < 15) {
    return newArray;
  }
}
