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
    let facts[i] = facts.splice(i, 1, facts[i] + "!!!");
    i += 1
  } return facts
}
