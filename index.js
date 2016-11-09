function theBeatlesPlay(arrayM, arrayI) {
  var result = [];

  for (var i = 0; i < arrayM.length; i++) {
    result.push(`${arrayM[i]} plays ${arrayI[i]}`);
  }
  return result;
};

function johnLennonFacts(array) {
  var count = 0;
  while (array.length > count) {
    array[count] += "!!!";
    count++;
  }
  return array;
};

function iLoveTheBeatles(number) {
  var emptyArray = [];
  do {
    emptyArray.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return emptyArray;
};
