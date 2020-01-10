// add solution here
function theBeatlesPlay(musicians,instruments) {
  var beatlesArray = []
  for (var i = 0; i < musicians.length; i++) {
    beatlesArray.push(musicians[i] + ' plays ' + instruments[i])
  }
  return beatlesArray;
}

function johnLennonFacts(array) {
  var i = 0
  while (i < array.length) {
    array[i] += '!!!';
    i++;
  }
  return array;
}

function iLoveTheBeatles(num) {
  var arrayNew = [];
  var i = 0;
  do {
    arrayNew.push("I love the Beatles!");
    i++;
  } while (i <= num && num < 15);
  return arrayNew;
}
