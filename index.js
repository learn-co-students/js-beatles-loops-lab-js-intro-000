function theBeatlesPlay(mus,ins) {
  var t = [];
  for (var i = 0; i < mus.length; i++) {
    t.push(`${mus[i]} plays ${ins[i]}`)
  }
  return t
}

function johnLennonFacts(facts) {
  var f = 0
  while (f < facts.length) {
    facts[f] = facts[f] + "!!!";
    f++;
  }
  return facts
}

function iLoveTheBeatles(num) {
  var emp = []; //empty array
  do {
    emp.push("I love the Beatles!")
    num++
  } while (num < 15);
  return emp;
}
