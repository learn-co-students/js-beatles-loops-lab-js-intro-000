// add solution here
let theBeatlesPlay = (musicians, instruments) => {
  let array = [];
  for (let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  } return array
}

let i = 0

let johnLennonFacts = facts => {
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
  } while (num < 15)
} return array
