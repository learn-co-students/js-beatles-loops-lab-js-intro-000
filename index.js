function theBeatlesPlay(musician, instrument) {
  let array = [];
  for (let i = 0; i < musician.length; i++) {
    array.push(`${musician[i]} plays ${instrument[i]}`)
  }
  return array;
}

function johnLennonFacts(array) {
  let newArray = []
  let i = 0;
  while (i < array.length) {
    newArray.push(array[i] + '!!!');
    i++;
  }
  return newArray;
}

function iLoveTheBeatles(n) {
  let array = [];
  do {
    array.push("I love the Beatles!");
    n++
  } while(n < 15)
  return array;
}
