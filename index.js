function theBeatlesPlay(musiciansm, instruments) {
  //Set Conditions
  var musicians = ["John Lennon","Paul McCartney","George Harrison","Ringo Starr"];
  var instruments = ["Guitar","Bass Guitar","Lead Guitar","Drums"];

  //Loop Variables
  var theBeatlesPlay = []

  //Loop
  for (var i = 0; i < musicians.length; i++)  {
    theBeatlesPlay.push(musicians[i] + " plays " + instruments[i]);
  }
  return theBeatlesPlay
}

var facts = ["He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"];

function johnLennonFacts(facts) {
  var i=0;
  while (i < facts.length) {
    facts[i] += "!!!";
    i++;
  }

return facts;
}

function iLoveTheBeatles(number) {
  var iLoveBeatles = [];

  do {
    iLoveBeatles.push("I love the Beatles!");
    number++
  } while (number < 15)
  return iLoveBeatles
}
