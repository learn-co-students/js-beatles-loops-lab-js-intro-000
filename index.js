function theBeatlesPlay(musiciansArray, instrumentsArray) {

  var storageArray = new Array;

  for (var i = 0; i < musiciansArray.length; i++) {

    storageArray.push(musiciansArray[i] + " plays " + instrumentsArray[i]);
    console.log(storageArray[i]);

  }

  return storageArray;

}

function johnLennonFacts(johnArray) {

  var counter = johnArray.length;

  while (counter > 0) {

    johnArray[counter-1] = johnArray[counter-1] + '!!!'

    counter--
  }

  return johnArray;
}

function iLoveTheBeatles(number){

  var fanArray = new Array;

  do {

    fanArray.push("I love the Beatles!");
    number++

  } while (number < 15);

  return fanArray;

}
