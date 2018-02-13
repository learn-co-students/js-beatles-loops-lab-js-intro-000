function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i<musicians.length; i++) {array.push(musicians[i] + ' plays ' + instruments[i]);
}
return array;
}

function johnLennonFacts(array) {
  var final = [];
  var n = 0;
  while (n < array.length) {final.push(array[n] + '!!!'); 
  n++;
}
return final
}

function iLoveTheBeatles(n) {
  var array = [];
  do {array.push("I love the Beatles!"); 
  n++;
    }
  while (n < 15);
  return array;
} 