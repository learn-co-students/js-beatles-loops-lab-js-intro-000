// add solution here
var final = [];
function theBeatlesPlay(musicians, instruments) {
  // body of the function creates an empty array stored in a variable
  // contains a for loop
  for (let i = 0; i < musicians.length; i++) {
    final[i] = musicians[i] + " plays " + instruments[i]
  }
  return final
}

function johnLennonFacts(facts) {
  var end = [];
  var i = 0;
  while (i < facts.length) {
    end[i] = facts[i] + "!!!"
    i++
  }
  return end
}

function iLoveTheBeatles(number) {
  var store = [];
  do {
    store.push("I love the Beatles!")
    number++
  } while (number < 15);

  return store
}
