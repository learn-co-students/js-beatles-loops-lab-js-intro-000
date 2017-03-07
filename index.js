var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments){
  var array = [];
  for (var i= 0; i < musicians.length; i++){
    array.push(musicians[i] + ' plays ' + instruments[i]); // a destructive way to put this string into the array
  }
  return array;
}

function johnLennonFacts(array){
  for (var i = 0; i < array.length; i++) {
    // each element of the array is a string
    // we want to add to that string '!!!' destructively; array[0] = 'hello'
    array[i] += '!!!'
  }
  return array;
}

function iLoveTheBeatles(n){
  var array = [];
  do {
    array.push("I love the Beatles!");
    n++
  } while (n < 15);
  return array;
}
