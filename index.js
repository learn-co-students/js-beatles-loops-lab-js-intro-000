// add solution here

  function theBeatlesPlay(musicians, instruments) {
  var emptyArray =[];
  for (var index=0; index < musicians.length; index++) {
    emptyArray.push(musicians[index] + ' plays ' + instruments[index])
  }
return emptyArray;
}

function johnLennonFacts(array) {
var i = 0;
  while (i < array.length) {
    array[i] = array[i] + "!!!"
    i++;
  }
  // for(var index = 0; index < array.length; index++) {
  //   array[index] = array[index] + "!!!"
  // }
   return array;
}

function iLoveTheBeatles(param) {
  var emptyArray = [];
  var i = 0;


  do {
    // iLoveTheBeatles(param);
    emptyArray.push('I love the Beatles!')
    i = i + 1;
  }while (i <= param && !(param >= 17)  );


  return emptyArray
}
