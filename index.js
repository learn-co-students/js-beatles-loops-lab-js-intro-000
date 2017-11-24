function theBeatlesPlay(musicians, instruments) {
  var sentences = [];
  for (let i = 0; i < musicians.length; i++) {
    sentences.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return sentences;
}

function johnLennonFacts(arr) {
  var count = arr.length - 1;
  while(count >= 0) {
    arr[count] = `${arr[count]}!!!`
    count -= 1;
  }
  return arr;
}

function iLoveTheBeatles(n) {
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return arr;
}
