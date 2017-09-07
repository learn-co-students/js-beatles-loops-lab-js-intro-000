function theBeatlesPlay(musicians, instruments) {
  var array = new Array();

  for (let i = 0; i < musicians.length; i++)
  {
    array.push(musicians[i] + " plays " + instruments[i])
  }
  return array
}

function johnLennonFacts(facts) {
  let i = 0;
  var facts1 = new Array();
  while (i < facts.length) {
    facts1.push(facts[i++] + "!!!")
  }
  return facts1
}

function iLoveTheBeatles(n) {
  var array = new Array();
  do {
    array.push("I love the Beatles!");
    n = (n+1)
    } while (n < 15) {
  }
  return array
}
