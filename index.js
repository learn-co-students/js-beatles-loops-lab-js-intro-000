function theBeatlesPlay(arrayMusicians, arrayInstruments) {
  var newArray = new Array();
  var i;
  var aString;

  for ( i = 0 ; i < arrayMusicians.length ; i++) {
    aString = '' + arrayMusicians[i] + " plays " + arrayInstruments[i];
    newArray[i] = aString;
  }
  return newArray;
}

function johnLennonFacts(arrayFacts) {
  var i;
  i = 0;
  
  while (i < arrayFacts.length) {
    arrayFacts[i] = arrayFacts[i] + "!!!"
    i++;
  } 
  return arrayFacts;
}

function iLoveTheBeatles(number) {
  var anArray = new Array();
  var i;
  i = 0;
  
  do {
    anArray[i] = "I love the Beatles!";
    number++;
    i++;
  } while (number < 15)
  return anArray;
}