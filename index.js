function theBeatlesPlay(artist, instruments){
  var arr = []
  for(var i = 0; i < artist.length; ++i){
    arr.push(`${artist[i]} plays ${instruments[i]}`)
  }
  return arr
}

function johnLennonFacts(facts){
  var arr = []
  for(var i = 0; i < facts.length; ++i){
    arr.push(`${facts[i]}!!!`)
  }
  return arr
}

function iLoveTheBeatles(n){
  var arr = []
  do{
    arr.push('I love the Beatles!')
    ++n
  }
  while(n < 15);
  return arr
}
