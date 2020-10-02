// add solution here
function theBeatlesPlay(musicians,instruments){
  var empty = []

  for (let i = 0, l = musicians.length; i < l; i++) {
    empty.push(`${musicians[i]} plays ${instruments[i]}`)
  }
return empty
}
function johnLennonFacts(f){
  var yell = []
  let i = 0
  while (i < f.length) {
    yell.push(`${f[i]}!!!`)
    i++
  }
  return yell
}
function iLoveTheBeatles(n){
  var empty = []

  do {
    empty.push('I love the Beatles!')
    n++
  } while (n < 15)
  return empty
}
