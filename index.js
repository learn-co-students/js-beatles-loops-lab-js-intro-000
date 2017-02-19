function theBeatlesPlay(musicians, instruments) {
  var songs = []
    for (let i = 0; i < musicians.length; i++) {
      songs.push(`${musicians[i]} plays ${instruments[i]}`)
    }
  return songs
}

function johnLennonFacts(facts) {
  var arr = []
  let i = 0;
  while (i < facts.length){
    arr.push(`${facts[i]}!!!`)
    i++
  }
  return arr
}

function iLoveTheBeatles(number) {
  var arr = []
  do {
    arr.push("I love the Beatles!")
    number++
  } while(number < 15)
  return arr
}