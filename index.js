function theBeatlesPlay(musicians, instruments) {
  var emptyArray =[];
  for (var i = 0; i < musicians.length; i++) {
    emptyArray.push(musicians[i] + ' plays ' + instruments[i]); //mutuable array
  }
  //console.log(fullArray);
  return(emptyArray)
}

function johnLennonFacts(array) {
  var newArray = [];
  var constant = 0;
  while (newArray.length < array.length ) {
    newArray.push(array[constant] + '!!!');
    constant++;
  }
  return(newArray)
}

function iLoveTheBeatles(number) {
  var newArray = [];
  var i = number;
  do {
    newArray.push('I love the Beatles!')
    number++;
  } while (number < 15);
  return(newArray)
}
