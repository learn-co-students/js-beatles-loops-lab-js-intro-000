function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i=0; i< musicians.length ; i++) {
    array.push(musicians[i] + " plays " + instruments[i])
   }
  return array;
}

function johnLennonFacts(array) {
  var i=-1;
  while (i< array.length - 1) {
    i++;
    array[i] = array[i] + "!!!"
  }
  return array;
}

function iLoveTheBeatles(num){
  var array = [];
  var i = 0;

  if (num > 15){
    i = num;
  };

  do {
    array.push("I love the Beatles!")
  }
  while (i++ < num);
  return array;
}
