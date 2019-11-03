// var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
// var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
function theBeatlesPlay (musicians, instruments) {
  var yesterday = []
  for (var i = 0; i < musicians.length; i++) {
    console.log(musicians[i] + " plays " + instruments[i]);
    yesterday.push(musicians[i] + " plays " + instruments[i]);
  }
  return yesterday
}

function johnLennonFacts (facts) {
  // const facts = [
  //   "He was the last Beatle to learn to drive",
  //   "He was never a vegetarian",
  //   "He was a choir boy and boy scout",
  //   "He hated the sound of his own voice"
  // ];
  var i = 0
  var help = []
  while (facts[i])
    {
      console.log (facts[i] + "!!!");
      help.push (facts[i] + "!!!");
      i=i+1;
    }
    return help
}

function iLoveTheBeatles (num) {
var i = 0
var sun = []

function incrementVariable() {
  i = i + 1;
  return i;
}

do {
  console.log("I love the Beatles!");
  sun.push ("I love the Beatles!");
  num++;
} while (num < 15)
return sun
}
