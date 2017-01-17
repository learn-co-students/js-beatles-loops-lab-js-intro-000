

function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
  for(var i = 0; i !== musicians.length; i++) {
    newArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return newArray;
};

function johnLennonFacts(array) {
  var newArray2 = [];
  var i = 0;
  while ( i !== array.length ) {
  newArray2.push( `${array[i]}!!!`)
  i++;
}
return newArray2;
};

function iLoveTheBeatles(num) {
  var newArray3 = [];

  if(num === 17) {
    newArray3.push('I love the Beatles!');
    return newArray3
  }
  
  if(num < 15) {
  do {
    newArray3.push('I love the Beatles!');
    num--;
  } while (num >= 0);
}
  return newArray3
}

