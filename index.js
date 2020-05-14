function theBeatlesPlay(musicians, instruments) {
  let array = [];
  for (let i = 0; i < musicians.length; i++) {
    console.log(`${musicians[i]} plays ${instruments[i]}`);
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array
}

function johnLennonFacts(array) {
  let facts = []
  let num = 0;
  while (num < array.length) {
  facts.push(`${array[num]}!!!`)
  num += 1
  }
  return facts
}

function iLoveTheBeatles(num) {
  let array = [];
  do {
  array.push("I love the Beatles!");
  num = num + 1;
}  while (num < 15);
   return array
}
