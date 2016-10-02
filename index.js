function theBeatlesPlay(mus, ins) {
  var sen = [];
  var i=0
  for (i=0; i < mus.length; i++) {
    sen[i] = `${mus[i]} plays ${ins[i]}`
    }
  return sen
}

function johnLennonFacts(facts) {
  var newar = []
  var i=0
  while (i<facts.length) {
    newar[i] = facts[i] + '!!!'
    i+=1
  }
  return newar
}

function iLoveTheBeatles(n) {
  var ar = []
  var i=0
  do {ar[i] = "I love the Beatles!"
i+=1
n+=1}
  while(n < 15)
  return ar
}
