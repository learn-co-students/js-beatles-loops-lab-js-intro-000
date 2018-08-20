// add solution here

function theBeatlesPlay(musicians, instruments) {

 let mus = []
 for (let m = 0; m < musicians.length; m++) {
   mus.push(`${musicians[m]} plays ${instruments[m]}`)
 }
 return mus
}

function johnLennonFacts(facts) {
  for (let x = 0; x < facts.length; x++) {
    facts[x] = facts[x] + '!!!'
  }
  return facts
}

function iLoveTheBeatles(num) {
  let arr = []
  do {
    arr.push("I love the Beatles!")
    num++
  } while (num < 15)
  return arr
}
