function theBeatlesPlay(musicians, instruments) {
  var array=[];
  for(var i=0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

/*
function johnLennonFacts(array) {
  var newArray = [];
  var i=0;
  do { newArray.push(`${array[i]}!!!`);
       i++;
  } while (i<array.length);
  return newArray;
}
*/


function johnLennonFacts(array) {
  var i=0;
  do { array[i]=`${array[i]}!!!`;
       i++;
  } while (i<array.length);
  return array;
}


function iLoveTheBeatles(n) {
  var array=[];
  do {array.push('I love the Beatles!');
  n++;
     } while (n<15);
  return array;
}