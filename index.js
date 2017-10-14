function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)

  }
  return array
}

function johnLennonFacts(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] + "!!!";
  }
  return array
}

function iLoveTheBeatles(number) {
  var variable = []

  do {

  variable.push("I love the Beatles!")
  number--;

} while (number >= 0 && number < 15)
    return variable

}
