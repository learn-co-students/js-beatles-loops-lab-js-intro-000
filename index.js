function theBeatlesPlay(musicians,instruments){
  // return? array where each line is [[musician] plays [instruments]].
  var arrayInternal = [];
  var stringInternal = "";

  for (var i=0; i<musicians.length; i++) { // FOR LOOP INTERNALS SHOULD BE COMMAS!!!!
    stringInternal = musicians[i] + " plays " + instruments[i];
    arrayInternal[i] = stringInternal;
  }

  return arrayInternal;
}

function johnLennonFacts(array){
  var arrayInternal = [];
  var i = 0;

  while (i < array.length){
    arrayInternal[i] = array[i] + "!!!";
    i++;
  }

  return arrayInternal;
}

function iLoveTheBeatles(number){
  var arrayInternal = [];
  var numberInt = number;
  var i = 0;

  do {
    arrayInternal[i] = "I love the Beatles!";
    i++;
    numberInt++;
  } while ( 15 - numberInt > 0 )

  return arrayInternal;
}
