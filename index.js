// add solution here
let theBeatlesPlay = (musicians, instruments) => {
  let array = [];
  for (let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  } return array
}

let johnLennonFacts = facts => {
  let i = 0;
  while (i < facts.length) {
    facts.splice(i, 1, `${facts[i]}!!!`);
    i += 1
  } return facts
}

let iLoveTheBeatles = num => {
  let array = []
  do {
    array.push("I love the Beatles!");
    num += 1
  } while (num < 15);
  return array
}
