// add solution here
function theBeatlesPlay(musicians, instruments){
  var Kobe = []

  for (let i = 0, l = musicians.length; i < l; i++){
    Kobe.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return Kobe
}

function johnLennonFacts(factuals){
  const shoutedFactuals = []
  let i = 0
  while (i < factuals.length){
    shoutedFactuals.push(`${factuals[i]}!!!`)
    i++
  }
  return shoutedFactuals
}

function iLoveTheBeatles(number){
  const mamba = []

  do{
    mamba.push("I love the Beatles!")
    number++
  } while (number < 15)
  return mamba
}
