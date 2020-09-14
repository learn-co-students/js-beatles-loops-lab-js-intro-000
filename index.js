// add solution here
function theBeatlesPlay(arrayMusic, arrayInstru){
  var theBand = []
  for (let i = 0; i < arrayMusic.length; i++) {
    theBand[i] = `${arrayMusic[i]} plays ${arrayInstru[i]}`
  }
  return theBand
}

function johnLennonFacts(arrayFacts){
  for (var i = 0; i < arrayFacts.length; i++) {
    arrayFacts[i] = `${arrayFacts[i]}!!!`
  }
  return arrayFacts
}

function iLoveTheBeatles(num){
  var theBeatles = []
  let i = 0

  function incrementVariable() {
    i = i + 1;
    return i;
  }

  do {
    theBeatles[i] = `I love the Beatles!`
  } while (incrementVariable() < (15 - num));
  return theBeatles
}
