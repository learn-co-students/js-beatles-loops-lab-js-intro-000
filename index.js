function theBeatlesPlay(musicians, instruments){
  var array = []
  for (var i = 0; i < musicians.length; i++)
  array.push(musicians[i] + " plays " + instruments[i]);

  return array
}

function johnLennonFacts (facts){
  var newarray = []
  var i = 0
  while (i < facts.length) {
    newarray.push (facts[i] + "!!!")
    i++
  }
  return newarray
}

function iLoveTheBeatles(num){
  var anotherNewArray = []
  do {
    anotherNewArray.push("I love the Beatles!")
    num++;
  }
  while (num < 15)
  return anotherNewArray
}
