function theBeatlesPlay(musicians, instruments) {
  const Beatles = [];
  for ( var i = 0; i < musicians.length; i++) {
    Beatles.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return Beatles
}
function johnLennonFacts(facts) {
  let i = 0;
  const array = []
  while (i < facts.length) {
    array.push(`${facts[i]}!!!`);
    console.log(i++);
  }
return array
}
function iLoveTheBeatles(n) {
  var i = [];
  do {
    i.push("I love the Beatles!");
    console.log(n++);
  } while (n < 15);
  return i;
}
