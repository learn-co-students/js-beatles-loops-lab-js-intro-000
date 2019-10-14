// add solution here
function theBeatlesPlay(arrayOfMusicians,arrayOfInstruments){

  var musicianInstrument = []

  for (var i = 0; i < arrayOfMusicians.length; i++) {

    musicianInstrument.push("" + arrayOfMusicians[i] + " plays " + arrayOfInstruments[i])

  }

  return musicianInstrument

}

function johnLennonFacts(arrayOfFacts){

  var k = 0
  var arrayOfJohnFacts = []

  while (k<arrayOfFacts.length) {
    arrayOfJohnFacts.push(arrayOfFacts[k] + "!!!");
    k++
  }
  return arrayOfJohnFacts

}


var j=0

function iLoveTheBeatles(num){

var BeatlesLove = []

if (num == 17){

    BeatlesLove.push ("I love the Beatles!")


} else {

  do {
    BeatlesLove.push ("I love the Beatles!")
    j++;
  }
  while (j<=num);

}

return BeatlesLove

}
