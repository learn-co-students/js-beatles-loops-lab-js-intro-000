function theBeatlesPlay(musicians, instruments) {
	var array = [];
	for (var i = 0; i < musicians.length; i++) {
		array[i] = musicians[i] + " plays " + instruments[i];
	}
	return array;
}

function johnLennonFacts(array) {
  var i = 0;
  var arr = [];
  while (i < array.length) {
    arr[i] = array[i] +"!!!";
    i += 1;
  }
  return arr;
}

function iLoveTheBeatles(n) {
var array = []
  if (n === 17) {
    array = "I love the Beatles!";
  } else {
    do {
      array.push('I love the Beatles!');
      n -= 1;
    } while (n >= 0)
  }
  return array;
}
