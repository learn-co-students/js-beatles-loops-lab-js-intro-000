// add solution here
let theBeatlesPlay = (musicians, instruments) => {
  let array = [];
  for (let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  } return array
}

const facts = ["He was the last Beatle to learn to drive",
"He was never a vegetarian",
"He was a choir boy and boy scout",
"He hated the sound of his own voice"];

let i = 0

let johnLennonFacts = facts => {
  while (i < facts.length) {
    facts.splice(i, 1, `${facts[i]!!!}`);
    i += 1
  } return facts
}
