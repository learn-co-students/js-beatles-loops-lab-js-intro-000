function theBeatlesPlay(musicians,instruments) {
  var brandNew = [];
  for (let i = 0; i < musicians.length; i++) {
    brandNew.push(musicians[i] + " plays " + instruments[i]);
  }
  return brandNew;
}

function johnLennonFacts(facts){
  var newArray = [];
  var n = facts.length;
  while (n > 0) {
      newArray.unshift(facts[n-1] + "!!!");
      n--;
  }
  return newArray;
}


function iLoveTheBeatles(number){
  var newNew = [];
  do {
    newNew.push("I love the Beatles!")
    number++;
  }
  while (number <15)
  return newNew

}
