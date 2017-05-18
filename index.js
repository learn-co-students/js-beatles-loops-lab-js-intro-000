function theBeatlesPlay(artist,instrument){

  var string = "";
  var array = [];

  for (let i=0; i < artist.length; i++){
    string = artist[i] + " plays " + instrument[i];
    array[i] = string;
    string = ""
  }

  return (array);
}

function johnLennonFacts(facts){

  var max = facts.length;
  var current = 0;
  var string = "";
  var array = [];

  while (current < max){
    string = facts[current] + "!!!";
    array[current] = string;
    string = "";
    current++;
  }

  return(array)
}

function iLoveTheBeatles(number){
  var string = "I love the Beatles!"
  var array = [];
  var count = 0;

  do {
    array[count] = string;
    count++;
  } while (count < (number + 1) && number < 16)

  return(array);
}
