var theBeatlesPlay = (musicians, instruments) => {
  var array = []
  for (let i = 0; i < musicians.length; i++) {
    if (i === 0) {
          array.push(`${musicians[i]} plays ${instruments[i]}`)
    }
    else {
      array.push(`${musicians[i]} plays ${instruments[i]}`)
    }
  }
  return array
}

var johnLennonFacts = (facts) => {
  var array = []
  var i = 0
  while (i < facts.length) {
    array.push(facts[i]+"!!!")
    i++
  }
  return array
}

var iLoveTheBeatles = (number) => {
  var array = []
  do {
    array.push("I love the Beatles!")
    number++
  } while (number < 15)
  return array
}
