// add solution here
var musicians = [ "John Lennon", "Paul McCartney", "George Harrison",
 "Ringo Starr"];
 var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];


function theBeatlesPlay(musicians,instruments) {
  var newArr = []
for (var i = 0; i < musicians.length; i++){
  newArr.push(musicians[i] + " plays " + instruments[i])
}
return newArr;
}


function johnLennonFacts(facts){
  var count = 0;
  var results = [];
  while (count < facts.length) {
    results.push(facts[count] + "!!!");
    count++;
  }
  return results;
}


function iLoveTheBeatles(i) {
  var array = [];
  do {
    array.push("I love the Beatles!")
    i++;
  } while (i < 15);
    return array;
  }
