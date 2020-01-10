// add solution here
function theBeatlesPlay(musicians, instruments) {
  var band = [];
  var comstring;

  for (var counter = 0; counter < musicians.length; counter++) {
    if (counter === 0) {
      comstring = musicians[counter] + " plays " + instruments[counter];
      band.push(comstring)
    }
    else {
      comstring = musicians[counter] + " plays " + instruments[counter];
      band.push(comstring)
    }
  }

  return band
}

function johnLennonFacts(facts) {
  var i = 0;

  while (i < facts.length) {
    facts[i] += "!!!"
    i++
  }

  return facts
}

function iLoveTheBeatles(number) {
  var emptyarray = [];
  do {
    emptyarray.push("I love the Beatles!")
    number += 1
  } while (number < 15)

  return emptyarray
}
