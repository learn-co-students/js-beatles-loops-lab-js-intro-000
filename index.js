// add solution here
function theBeatlesPlay(musicians, instruments) {
  const bplay = []
  for (let i = 0; i < musicians.length; i++) {
    bplay.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return bplay
}

function johnLennonFacts(words){
  const word = []
  let i = 0
  while(i < words.length){
    word.push(`${words[i]}!!!`)
    i++
  }
  return word
}

function iLoveTheBeatles(i) {
  const words = []
  do {
    words.push('I love the Beatles!')
    i++
  } while (i < 15)
  return words
}
