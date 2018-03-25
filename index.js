function theBeatlesPlay(arr_musicians, arr_instruments) {
  var array = [];
  for (var i = 0; i < arr_musicians.length ; i++) {
  array.push(`${arr_musicians[i]} plays ${arr_instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(array) {
  var i = 0;
  var new_arr = [];
  while (i < array.length) {
    new_arr.push(`${array[i]}!!!`);
    i += 1;
  }
  return new_arr;
}

function iLoveTheBeatles(n) {
  var arr =[];
  do {
    arr.push('I love the Beatles!');
    n++;
  } while (n < 15);
  return arr;
}
