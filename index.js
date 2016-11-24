function theBeatlesPlay(musicians, instruments) {
  var array = [];
  var sentence;

  for (let i = 0; i < musicians.length; i++) {
    sentence = `${musicians[i]} plays ${instruments[i]}`;
    array.push(sentence);
  }

  return array;
}

function johnLennonFacts(array) {

  var results = [];

  for (let i = 0; i < array.length; i++) {
    results.push(array[i] + "!!!");
  }

  return results;

}

function iLoveTheBeatles(number) {

  var array = [];

  do {
    array.push("I love the Beatles!");
    number += 1;
  } while (number < 15)

  return array;

}
