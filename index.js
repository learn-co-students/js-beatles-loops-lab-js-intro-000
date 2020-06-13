// add solution here
function theBeatlesPlay(musicians, instruments) {
  var temparray = [];
  for (let i = 0; i < musicians.length; i++) {
    temparray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return temparray;
}

function johnLennonFacts(array) {
  var temporary = [];
  for (let i = 0; i < array.length; i++) {
    temporary.push(`${array[i]}!!!`);
  }
  return temporary;
}

function iLoveTheBeatles(number) {
  var temp = [];
  let i = 0;
  do {
    temp.push("I love the Beatles!")
    i = i + 1;
  } while (i + number < 15);
  return temp;
}
