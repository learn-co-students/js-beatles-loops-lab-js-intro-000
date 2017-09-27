function theBeatlesPlay(musician, instrument) {
  var playlist = [];
  for (let i = 0; i < instrument.length; i++) {
    playlist.push(`${musician[i]}` + " plays " + `${instrument[i]}`); }
  return playlist;
}
function johnLennonFacts(facts) {
  var newFacts = [];
  var i = 0;
  while (i < facts.length) {
    newFacts[i] = facts[i] + "!!!";
    i++;
  }
  return newFacts;
}
function iLoveTheBeatles(number) {
  var newList = [];
  do { newList.push("I love the Beatles!");
number++; }
while (number < 15);
return newList;
}
