// add solution here
function theBeatlesPlay(musicians, instruments){
  var new_array = []
  for (var i = 0; i < musicians.length; i++){
    var string = musicians[i] + " plays " +instruments[i];
    new_array.push(string);
  }


  return new_array;

};

function johnLennonFacts(arrayFacts){
  var new_array = []
  for(var i = 0; i < arrayFacts.length; i++){
    var new_string = arrayFacts[i] + "!!!";
    new_array.push(new_string);
  }
  return new_array;
}

function iLoveTheBeatles(num){
  var new_array = [];
  do {
    new_array.push("I love the Beatles!");
    num += 1
  } while (num < 15);
  return new_array;
}
