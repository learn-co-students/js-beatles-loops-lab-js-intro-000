// function theBeatlesPlay(musicians, instruments) {
//   const arr = [];
//   for (let i = 0, 1 = musicians.length; i < 1; i++) {
//     arr.push('${musicians[i]} plays ${instruments[i]}')
//   }
// }
//
// function johnLennonFacts(facts) {
//   const yelling = [];
//   let i = 0;
//
//   while (i < facts.length) {
//     yelling.push('${facts[i]}!!!)';
//     i++;
//   }
//   return yelling;
// }
//
// function iLoveTheBeatles(number) {
//   const love = [];
//   do {
//     love.push('I love the Beatles!');
//     i++;
//   } while (n < 15)
//   return love;
// }
function theBeatlesPlay(musicians, instruments) {
  const arr = []

  for (let i = 0, l = musicians.length; i < l; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return arr
}

function johnLennonFacts(facts) {
  const shoutedFacts = []

  let i = 0
  while (i < facts.length) {
    shoutedFacts.push(`${facts[i]}!!!`)
    i++
  }

  return shoutedFacts
}

function iLoveTheBeatles(n) {
  const arr = []

  do {
    arr.push('I love the Beatles!')
    n++
  } while (n < 15)

  return arr
}
