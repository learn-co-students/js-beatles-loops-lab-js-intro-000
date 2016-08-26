function theBeatlesPlay(musicians, instruments){
  var musicianToInstrument = [];
  for (var i=0; i < musicians.length; i++){
    var musicianName = musicians[i];
    var instrumentType = instruments[i];
    musicianToInstrument.push(`${musicianName} plays ${instrumentType}`);
  }
    return musicianToInstrument
}

function johnLennonFacts(facts){
  var index = 0;
  var newFacts = [];
  while(index < facts.length){
    newFacts.push(facts[index] += '!!!');
    index++;
  }
  return newFacts;
}

function iLoveTheBeatles(number){
  var array = [];
  var i = 0;
	if(number < 15){
	  do {
		array.push('I love the Beatles!');
		i++;
	  }
	  while(i <= number);
	} else {
		array.push('I love the Beatles!');
	}

  return array;
}
