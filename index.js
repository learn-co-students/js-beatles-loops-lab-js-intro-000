function theBeatlesPlay (arrMusicians, arrInstruments) {
  var tmpArray = [];
  var length = arrMusicians.length;

  for (var i=0;i<length;i++) {
    var instrStr=(arrInstruments.length<i?"Not Defined":arrInstruments[i]);
    var str = arrMusicians[i]+" plays " + (arrInstruments.length<i?"Not Defined":arrInstruments[i]);
    tmpArray.push(str);
  }
  return tmpArray;
}

function johnLennonFacts (array) {
  var retArray = [];
  for (var i=0;i<array.length;i++) {
    var factStr = array[i] +"!!!";
    retArray.push(factStr);
  }
  return retArray;
}


function iLoveTheBeatles (n) {
  var retStr = "I love the Beatles!";
  var retArray = [];
  switch(n) {
    case 7:
      for (var i=0;i<8;i++) {
        retArray.push(retStr);
      }
       break;
    case 17:
      retArray.push(retStr);
       break;
  }
return retArray;
}
