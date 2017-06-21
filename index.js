function theBeatlesPlay(name, action) {
  var result = [];
  for (let i = 0; i < name.length; i++) {
    result.push(name[i] + ` plays ` + action[i]);
  }
  return result;
}

function johnLennonFacts(array) {
  var index = 0;
  while (index < array.length) {
    array[index] += '!!!';
    index++;
  }
  return array;
}

function iLoveTheBeatles(num) {
  var array = [];
  do {
    array.push('I love the Beatles!');
    ++num;
  } while (num < 15);
  return array;
}
