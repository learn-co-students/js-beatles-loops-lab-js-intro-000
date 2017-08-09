function theBeatlesPlay(musicians, instruments){
  var array = []

  for (var i = 0; i < musicians.length; i++) {

    var string = musicians[i] + " plays " + instruments[i]
    array.push(string)
  }
  return array
}

function johnLennonFacts(facts){
  var array = []
  var counter = 0
  while (counter < facts.length) {
    var string = facts[counter] + '!!!'
    array.push(string)
    counter++
  }
  return array
}

function iLoveTheBeatles(number){
  var array = []
  var string = "I love the Beatles!"
  do {

    array.push(string)
    number++
  } while (number < 15);

  return array
}
