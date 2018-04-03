function theBeatlesPlay(musicianArray, instrumentArray) {
  let beatlesPlayArray = new Array();
  for (let i = 0; i < musicianArray.length; i++) {
    beatlesPlayArray.push(`${musicianArray[i]} plays ${instrumentArray[i]}`);
  }
  return beatlesPlayArray;
}

function johnLennonFacts(array) {
  let lennonFactsArray = new Array();
  let i = 0;
  while (i < array.length) {
    lennonFactsArray.push(array[i] + '!!!');
    i++;
  }
  return lennonFactsArray;
}

function iLoveTheBeatles(n) {
  let beatlesLove = new Array();
  do {
    beatlesLove.push('I love the Beatles!')
    n++
  } while (n < 15);
  return beatlesLove;
}
