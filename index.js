function theBeatlesPlay(musicians, instruments) {
  var emptyArray = [];
  for (var i = 0; i < musicians.length; i++) {

    var music = musicians[i];
    var strum = instruments[i];
     emptyArray.push(`${music} plays ${strum}`);
  }
return emptyArray
}

function johnLennonFacts(array) {
var facts = [];
  var i = 0;


while (i < array.length) {
  var plcHldr = array[i];
  i++;
  facts.push(`${plcHldr}!!!`);
}
    return facts;
  }

  function iLoveTheBeatles(number){
    var beatles = [];
    do {
      beatles.push("I love the Beatles!")
number++;
    } while (number < 15);

    return beatles;
  }
