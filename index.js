// add solution here
function theBeatlesPlay(beatle, instrument){
  var playArray = []
  for (var i = 0; i <= beatle.length - 1; i++){
  playArray.push(beatle[i] + " plays " + instrument[i])
  }
  return playArray
}

function johnLennonFacts (factArr) {
  var fanGirl = []
  for (var i = 0; i <= factArr.length - 1; i++){
  fanGirl.push(factArr[i] + '!!!')
}
 return fanGirl
}

function iLoveTheBeatles (num){
  var love = []
  do {love.push("I love the Beatles!") }
  while (num++ < 14 )
  return love
}
